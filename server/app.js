const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const { getDistance } = require('geolib');
const path = require('path');

const app = express();

const MAX_RESULTS = 10;

// Function to read CSV file return data.
function readCSVData(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        const absolutePath = path.join(__dirname, filePath);

        fs.createReadStream(absolutePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}
// Function to parse params.
function parseQueryParams(req, res) {
    let lat = parseFloat(req.query.lat);
    let long = parseFloat(req.query.long);
    let n = parseInt(req.query.n);

    if (isNaN(lat) || isNaN(long) || isNaN(n) || n > MAX_RESULTS) {
        res.status(400).send({
            error: 'Invalid query parameter(s)'
        });
        return null;
    }

    return {
        lat,
        long,
        n
    };
}

// Function for nearest vaccine endpoint.
app.get('/nearest-vaccines', async (req, res) => {
    let queryParams = parseQueryParams(req, res);
    if (!queryParams) return;

    let {
        lat,
        long,
        n
    } = queryParams;
    const locationsData = await readCSVData('vac.csv');
	
	// Map CSV data.
    let distances = locationsData.map(item => ({
        ...item,
        distance: getDistance({
            latitude: lat,
            longitude: long
        }, {
            latitude: parseFloat(item.latitude),
            longitude: parseFloat(item.longitude)
        })
    }));

    // Sort and return data in JSON
    let sortedLocations = distances.sort((a, b) => a.distance - b.distance).slice(0, n);
    res.json(sortedLocations); 
});

// Function for treatments vaccine endpoint.
app.get('/nearest-treatments', async (req, res) => {
    let queryParams = parseQueryParams(req, res);
    if (!queryParams) return;

    let {
        lat,
        long,
        n
    } = queryParams;
    const treatmentsData = await readCSVData('treat.csv');

    // Map CSV data.
    let distances = treatmentsData.map(item => ({
        ...item,
        distance: getDistance({
            latitude: lat,
            longitude: long
        }, {
            latitude: parseFloat(item.latitude),
            longitude: parseFloat(item.longitude)
        })
    }));

	// Sort and return data in JSON
    let sortedTreatments = distances.sort((a, b) => a.distance - b.distance).slice(0, n);
    res.json(sortedTreatments);
});

module.exports = app;

# COVID-19: An Information Archive

By: Markell S, Teagan Pierce, Tsegazeab berhie

This project has one simple goal: to inform people about COVID-19. This goal is achieved using a website and free use API.

Because of time constraints, this website is only intended for desktop browsers and will not work properly on mobile device. Developers can freely update the code to implement mobile phone functionality.

The website consist of various resources for finding information regarding COVID-19.

The API is a tool used to find vaccine locations using various parameters.

Added Deployment Link if Needed: https://final-vercel-deploy-sooty.vercel.app/

[Link to User Manual...](docs/USER_MANUAL.md)
[Link to Developer Manual...](docs/DEVELOPER_MANUAL)

# Developer Manual

This tool is intended for people who wish to further develop resources and tools for gathering information regarding COVID-19 in one handy place.
The website is made using standard HTML, JavaScript, and CSS. The API is made using a local Node.JS server.

### How to set up the API on a local server:
1. Install a [npm and node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "npm and node.js") distribution for your operating system.
2. Clone the repository.
3. Change directory to `server`.
4. Initate npm using `npm init -y`.
5. Install dependencies using `npm install express csv-parser geolib`.
6. Change endpoints in api.js to your localhost IP instead of deployment /api/ address.

### How to run the API:
1. Run `node server-local.js`.

### How to run tests
1. Ensure developer dependencies: `npm install --save-dev mocha chai supertest.`
2. Edit `test.js` - mocha looks for `test/*.test.js` and `test/test.js`.
3. Run `npm test`.

### Endpoints:
- /nearest-vaccines: 
	- Lat:  Latitude.
	- Long: Longitude
	- N: Number of results to return. Default max is 10, otherwise, an invalid parameter error is returned.
- Returns data about places which administer vaccines. Please see user manual for response data.

- /nearest-treatment: 
	- Lat:  Latitude.
	- Long: Longitude
	- N: Number of results to return. Default max is 10, otherwise, an invalid parameter error is returned.
- Returns data about places which treat COVID-19. Please see user manual for response data.

### Known bugs:
- The website does not work on mobile devices.

### Road-map
- More functionality and endpoints.
- Mobile website design.
- Deploy API.

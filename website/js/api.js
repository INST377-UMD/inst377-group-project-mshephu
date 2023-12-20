document.addEventListener('DOMContentLoaded', function() {
    // Function to validate input.
    function validateNumberInput(input) {
        input.value = input.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }

    // Function to make API request.
    function makeApiCall(apiEndpoint, latId, lonId, nId, preId) {
        const lat = document.getElementById(latId).value;
        const lon = document.getElementById(lonId).value;
        const n = document.getElementById(nId).value;
        // Use window.location.origin to dynamically get the current domain
        const url = `${window.location.origin}/api/${apiEndpoint}?lat=${lat}&long=${lon}&n=${n}`;
        const preElement = document.getElementById(preId);

        preElement.textContent = 'Loading...';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                preElement.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error:', error);
                preElement.textContent = 'Could not connect to server.';
            });
    }

    // Button listener for API 1
    document.getElementById('goButton1').addEventListener('click', function() {
        makeApiCall('nearest-vaccines', 'lat1', 'lon1', 'n1', 'json-pre1');
    });

    // Button listener for API 2
    document.getElementById('goButton2').addEventListener('click', function() {
        makeApiCall('nearest-treatments', 'lat2', 'lon2', 'n2', 'json-pre2');
    });
});

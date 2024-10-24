document.addEventListener('DOMContentLoaded', async function () {
    // Use the API URL directly without the CORS proxy if CORS is handled in the backend
    const apiUrl = 'https://aurdino-control-backend.vercel.app/data';

    // Function to fetch data from the API
    async function fetchData() {
        try {
            const response = await fetch(apiUrl, {
                method: 'GET', // Specify the method
                headers: {
                    'Content-Type': 'application/json' // Set Content-Type header if needed
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();  // Parse the JSON response
            const dataContainer = document.getElementById('data-container');

            // Clear the container before adding new data
            dataContainer.innerHTML = '';

            // Check if the 'data' array exists and has items
            if (data.data && data.data.length > 0) {
                // Loop through the array and create divs for each item
                data.data.forEach(item => {
                    const dataItem = document.createElement('div');
                    dataItem.textContent = item;
                    dataItem.classList.add('data-item');  // Add class for styling
                    dataContainer.appendChild(dataItem);
                });
            } else {
                // If no data received, display a message
                dataContainer.textContent = 'No data received yet.';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            const dataContainer = document.getElementById('data-container');
            dataContainer.textContent = `Error fetching data: ${error.message}`;  // Show the error message
        }
    }

    // Call the fetchData function on page load
    fetchData();

    // Fetch data every 5 seconds (optional)
    setInterval(fetchData, 5000);  // Fetch new data every 5 seconds
});

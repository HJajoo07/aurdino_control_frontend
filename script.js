document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://example.com/data';  // Replace with your actual API URL

    // Function to fetch data from the API
    function fetchData() {
        fetch(apiUrl)
            .then(response => response.json())  // Parse the JSON response
            .then(data => {
                const dataContainer = document.getElementById('data-container');

                // Clear the container before adding new data
                dataContainer.innerHTML = '';

                // Check if the 'data' array exists and has items
                if (data.data && data.data.length > 0) {
                    // Loop through the array and create paragraphs for each item
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
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Call the fetchData function on page load
    fetchData();

    // Fetch data every 5 seconds (optional)
    setInterval(fetchData, 5000);  // Fetch new data every 5 seconds
});

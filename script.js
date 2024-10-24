document.addEventListener('DOMContentLoaded', function () {
<<<<<<< HEAD
    const apiUrl = 'https://aurdino-control-backend.vercel.app/data';
=======
    const apiUrl = 'https://aurdino-control-backend.vercel.app/data';  // Replace with your actual API URL
>>>>>>> f6ddb0cdea9e3a1b5ddfdc4b34d13ea086eee602

    // Function to fetch data from the API
    function fetchData() {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const dataContainer = document.getElementById('data-container');
                dataContainer.innerHTML = ''; // Clear the container

                if (data.data && data.data.length > 0) {
                    data.data.forEach(item => {
                        const dataItem = document.createElement('div');
                        dataItem.textContent = item;
                        dataItem.classList.add('data-item');
                        dataContainer.appendChild(dataItem);
                    });
                } else {
                    dataContainer.textContent = 'No data received yet.';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                const dataContainer = document.getElementById('data-container');
                dataContainer.textContent = `Error fetching data: ${error.message}`;  // Show the error message
            });
            
    }

    // Call the fetchData function on page load
    fetchData();
<<<<<<< HEAD
    setInterval(fetchData, 5000);  // Fetch new data every 5 seconds
=======

    // Fetch data every 5 seconds (optional)
    setInterval(fetchData, 1000);  // Fetch new data every 5 seconds
>>>>>>> f6ddb0cdea9e3a1b5ddfdc4b34d13ea086eee602
});

function addToCart() {
  document.getElementById('addToCart').addEventListener('click', () => {
    alert('Added to the Cart successfully');
  });
}


addToCart();


document.getElementById('searchbtn').addEventListener('click', ()=> {
  document.querySelector('search')
});



function openNav() {
  document.getElementById('nav-links').style.width = "250px";
}


function closeNav() {
   document.getElementById('nav-links').style.width = "0px";
}

document.getElementById("search-button").addEventListener("click", function() {
            const searchQuery = document.getElementById("search-input").value.trim();
            
            if (searchQuery) {
                searchItems(searchQuery);
            } else {
                alert("Please enter a search term.");
            }
        });

        function searchItems(query) {
            // Sample results for demonstration
            const results = [
                { name: "African Ankara Dress", designer: "Mary Fashion", price: "$50" },
                { name: "Classic Tailored Suit", designer: "Benue Tailor", price: "$120" },
                { name: "Traditional Kente Wrap", designer: "Niger Designer", price: "$40" }
            ];

            const filteredResults = results.filter(item => 
                item.name.toLowerCase().includes(query.toLowerCase()) || 
                item.designer.toLowerCase().includes(query.toLowerCase())
            );

            displayResults(filteredResults);
        }

        function displayResults(results) {
            const resultsContainer = document.getElementById("results");
            resultsContainer.innerHTML = ""; // Clear previous results

            if (results.length === 0) {
                resultsContainer.innerHTML = "<p>No results found.</p>";
                return;
            }

            results.forEach(result => {
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.innerHTML = `
                    <h3>${result.name}</h3>
                    <p>Designer: ${result.designer}</p>
                    <p>Price: ${result.price}</p>
                `;
                resultsContainer.appendChild(resultItem);
            });
        }

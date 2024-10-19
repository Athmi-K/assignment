 function searchCakes() {
             
                const searchInput = document.getElementById('searchInput').value.toLowerCase();
             
                const cakes = document.querySelectorAll('.cake-item');
                
                
                cakes.forEach(cake => {
                   
                    const cakeName = cake.querySelector('a').innerText.toLowerCase();
                    
                    if (cakeName.includes(searchInput)) {
                        cake.style.display = "block";  
                    } else {
                        cake.style.display = "none";   
                    }
                });
            }
        
           
            document.getElementById('searchButton').addEventListener('click', function() {
                searchCakes();  
            });
        
     
            document.getElementById('searchInput').addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    searchCakes();  
                }});
          
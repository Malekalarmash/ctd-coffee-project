document.addEventListener('DOMContentLoaded', function() {  
    document.getElementById('cold-coffee-button').addEventListener('click', async function() {
        try {
            const resp = await fetch('https://api.sampleapis.com/coffee/iced'); // Await fetch
            console.log('Cold coffee button clicked');
            const coffees = await resp.json(); // Await JSON parsing
            displayCoffee(coffees);
            console.log(coffees);
        } catch (err) {
            console.log('Error:', err.message);
        }
    });

});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hot-coffee-button').addEventListener('click', async function() {
        try {
            const resp = await fetch('https://api.sampleapis.com/coffee/hot'); // Await fetch
            console.log('Hot coffee button clicked');
            const coffees = await resp.json(); // Await JSON parsing
            displayCoffee(coffees);
            console.log(coffees);
        } catch (err) {
            console.log('Error:', err.message);
        }
    });

});
function displayCoffee(coffees) {
    const coffeeContainer = document.getElementById('coffeeContainer');
    coffeeContainer.innerHTML = ''; // Clear previous results
    coffees.forEach(coffee => {
        const card = document.createElement('div');
        card.className = 'coffee-card';

        card.innerHTML = `
            <img src="${coffee.image}" alt="${coffee.title}" class="coffee-image">
            <h3 class="coffee-card-title">${coffee.title}</h3>
            <p class="coffee-card-description">${coffee.description}</p>
        `;

        coffeeContainer.appendChild(card);
    });
}


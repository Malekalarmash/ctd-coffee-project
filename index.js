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
function displayCoffee(coffees) {
    coffeeContainer.innerHTML = ''; // Clear previous results

    coffees.forEach(coffee => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden p-4';

        card.innerHTML = `
            <img src="${coffee.image}" alt="${coffee.title}" class="w-full h-48 object-cover rounded-md">
            <h3 class="text-lg font-bold mt-2">${coffee.title}</h3>
            <p class="text-sm text-gray-600">${coffee.description}</p>
        `;

        coffeeContainer.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hot-coffee-button').addEventListener('click', async function() {
        try {
            const resp = await fetch('https://api.sampleapis.com/coffee/hot'); // Await fetch
            console.log('Hot coffee button clicked');
            const json = await resp.json(); // Await JSON parsing
            console.log(json);
        } catch (err) {
            console.log('Error:', err.message);
        }
    });

});


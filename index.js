document.getElementById('hot-coffee-button').addEventListener('click', async function() {
    try {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot'); // Await fetch
        const json = await resp.json(); // Await JSON parsing
        console.log(json);
    } catch (err) {
        console.log('Error:', err.message);
    }
});

document.getElementById('cold-coffee-button').addEventListener('click', async function() {
    try {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot'); // Await fetch
        const json = await resp.json(); // Await JSON parsing
        console.log(json);
    } catch (err) {
        console.log('Error:', err.message);
    }
});
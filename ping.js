const https = require("https");

const url = "https://rendertest-oqbw.onrender.com";

setInterval(() => {
    https.get(url, (res) => {
        console.log(`Pinged ${url}: Status ${res.statusCode}`);
    }).on("error", (err) => {
        console.error(`Error pinging ${url}:`, err.message);
    });
}, 10000); // Alle 10 Sekunden

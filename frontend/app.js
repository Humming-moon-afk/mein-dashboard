const ANTEILE = 20;
const TICKER = 'SPY';
const API_KEY = 'd8tdv29r01qhcnk225bgd8tdv29r01qhcnk225c0';

async function updatePortfolio() {
   try { const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${TICKER}&token=${API_KEY}`);
    const data = await response.json();

    const aktuellerKurs = data.c;
    const gesamtWert = ANTEILE * aktuellerKurs;

    document.getElementById('portfolio-value').innerText = gesamtWert.toFixed(2) + " USD";
    console.log("Depotwert erfolgreich aktualisiert: " + new Date().toLocaleTimeString());

} catch(error) {
    document.getElementById('portfolio-value').innerText = "Fehler beim Laden";
        console.error("API Fehler:", error);
}
}
updatePortfolio();
setInterval(updatePortfolio, 60000);
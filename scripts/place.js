const yearSpan = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const temperature = Number(document.querySelector("#temp").textContent);
const windSpeed = Number(document.querySelector("#wind").textContent);
const chillSpan = document.querySelector("#chill");

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
    chillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    chillSpan.textContent = "N/A";
}

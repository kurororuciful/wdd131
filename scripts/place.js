// footer year output
const year = document.querySelector("#year");

// footer last modified output
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();

// windchill factor
// {Wind Chill (°C)} = 13.12 + 0.6215T - 11.37V^{0.16} + 0.3965T(V^{0.16})
// ( T ) is the air temperature in degrees Celsius.
// ( V ) is the wind speed in kilometers per hour (kph).
function getWindChill(t,v) {
    return 13.12 + 0.6215 * t - 11.37 * (v ** 0.16) + 0.3965 * t * (v ** 0.16);
}

let t = 14.2;
let v = 59;

if (t <= 10 && v > 4.8) {
    const windChill = getWindChill(t, v);
    result.textContent = getWindChill(t, v).toFixed(1);
} 
else {
    result.textContent = "N/A";
}
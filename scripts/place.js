
const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

const today = new Date();
currentYearElement.textContent = today.getFullYear();

lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;

const calculateWindChill = (temp, windSpeed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);

const tempValue = 30; 
const windSpeedValue = 10; 

const windChillElement = document.getElementById("windchill");

if (tempValue <= 10 && windSpeedValue > 4.8) {
    windChillElement.textContent = `${calculateWindChill(tempValue, windSpeedValue)} °C`;
} else {
    windChillElement.textContent = "N/A";
}
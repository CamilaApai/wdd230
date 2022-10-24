//WIND CHILD CALCULATOR| Main - Weather Section

const temperature = parseFloat(document.querySelector("#temperature").innerText);
const windSpeed = parseFloat(document.querySelector("#windspeed").innerText);
let windChill = "";

if (temperature <= 50  && windSpeed > 3) {
    windChill = 35.74 + (0.6215 * temperature) - 
    (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16)); 
    windChill = Math.round(windChill);
}

else {
    windChill = "N/A";
}
document.querySelector("#windchill").innerHTML = windChill;




//WIND CHILD CALCULATOR| Main - Weather Section

const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#windspeed");
let windChill = "";

if (temperature <= 50  & windSpeed > 3) {
    windChill = Math.round(35.74 + (0.6215 * temperature) - 
    (35.75 * (windSpeed ** 0.16)) + (0.4275 ** temperature * (windSpeed ** 0.16)));
}

else {
    windChill = "N/A"
}

document.querySelector("#windchill").innerHTML = windChill;
// select HTML elements in the document
//const temperature = document.querySelector('#temperature');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Creates an "url" variable that stores the API URL 
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=64852b5276cd6e2cc74ad12cef7c0123';

//Use fetch() to request the given weather api url
async function apiFetch() {
try {
    const response = await fetch(apiURL);
    if (response.ok) {
    const data = await response.json();
    displayResults(data);
    } else {
       console.log(`Response not OK ${await response.text()}`);
    }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
apiFetch();

// Capitalize the content
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()} ${string.slice(1)}`;
}

// Display the results
function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }


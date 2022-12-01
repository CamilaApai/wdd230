//Get current date
let date = new Date();

//Get current year
let currentyear = date.getFullYear();

//Use querySelector to access the HTML element.
document.querySelector("#currentyear").textContent = currentyear;

//Tranforms lastModified into a Date object.
let oLastModif = new Date(document.lastModified);

dateformat = new Intl.DateTimeFormat("de-AT", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
})
  .format(oLastModif)
  .replace(/\./g, "/");

//Use querySelector to access the HTML element.
document.querySelector("#lastModified").textContent = dateformat;

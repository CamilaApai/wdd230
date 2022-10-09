//GETS FULL DATE | Header
//Get current date
const current_date = new Date();

//Use querySelector to access the HTML element.
const dateUK = document.querySelector(".date"); 

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(current_date);

dateUK.innerHTML = `<em>${fulldateUK}</em>`;

//GETS CURRENT YEAR | Footer
//Get current year
const currentyear = current_date.getFullYear();

//Use querySelector to access the HTML element.
document.querySelector("#currentyear").textContent = currentyear;

////GETS LAST MODIFICATION DATE | Footer
//Tranforms lastModified into a Date object.
const oLastModif = new Date(document.lastModified);

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


//GETS FULL DATE | Header
//Get current date
const current_date = new Date();

//Use querySelector to access the HTML element.
const dateUK = document.querySelector("#date"); 

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

//BANNER | Top of page
const weekDay = current_date.getDay();

if (( weekDay == 1) || ( weekDay == 2)) {
  banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

document.querySelector("#banner").style.fontFamily = "Ubuntu, Helvetica, sans-serif";
document.querySelector("#banner").style.padding = "10px";

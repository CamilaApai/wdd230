// CALCULATES USER NUMBER OF VISITS | Main 
// initialize display elements
const todayDisplay = document.querySelector("#lastvisit");
const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("lastvisit"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("lastvisit", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();



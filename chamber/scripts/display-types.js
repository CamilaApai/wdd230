//const gridbutton = document.querySelector("#grid");
//const listbutton = document.querySelector("#list");
//const display = document.querySelector(".cards");
//
//gridbutton.addEventListener("click", () => {
//	display.classList.add("grid");
//	display.classList.remove("list");
//});
//
//listbutton.addEventListener("click", () => {
//	display.classList.add("list");
//	display.classList.remove("grid");
//});

const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

async function getProfeths() {
  const response = await fetch(requestURL);
  if(response.ok) {
    const data = await response.json();
    data.members.forEach(member => {displaymembers(member)})
  }
} 

function displaymembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let phonenumber = document.createElement('p');
    let membershiplevel = document.createElement('p');


    // Change the textContent property of the h2 element to contain the member's full name
    h2.textContent = `${member.name}`;
    address.textContent = `Address: ${member.address}`;
    phonenumber.textContent = `Phone Number: ${member.phonenumber}`;
    membershiplevel.textContent = `Membership Level: ${member.membershiplevel}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', member.image);
    portrait.setAttribute('alt', `${member.name} logo`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2); 
    card.appendChild(portrait);  
    card.appendChild(membershiplevel);
    card.appendChild(address);
    card.appendChild(phonenumber);
  
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}

let data = getProfeths();





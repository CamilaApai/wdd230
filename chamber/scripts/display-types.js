//GRID AND LIST BUTTONS| MAIN
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

//DISPLAY MEMBERS CARDS| MAIN
const requestURL = "json/data.json";
const cards = document.querySelector(".cards");

async function getMembers() {
  const response = await fetch(requestURL);
  if (response.ok) {
    const data = await response.json();
    data.members.forEach((member) => {
      displaymembers(member);
    });
  }
}

function displaymembers(member) {
  //Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let logo = document.createElement("img");
  let address = document.createElement("p");
  let phonenumber = document.createElement("a");
  let membershiplevel = document.createElement("p");
  let websiteurl = document.createElement("a");
  let breakline = document.createElement("br");

  //Change the textContent property of the elements to contain the json information
  h2.textContent = `${member.name}`;
  address.textContent = `${member.address}`;
  phonenumber.innerHTML = `${member.phonenumber}`;
  phonenumber.href = `tel:${member.phonenumber}`;
  membershiplevel.textContent = `${member.membershiplevel}`;
  websiteurl.textContent = `Website`;
  websiteurl.href = `${member.websiteurl}`;

  //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute("src", member.image);
  logo.setAttribute("alt", `${member.name} logo`);
  logo.width = 200;
  logo.height = 200;
  logo.setAttribute("loading", "lazy");

  //Add the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(logo);
  card.appendChild(membershiplevel);
  card.appendChild(address);
  card.appendChild(phonenumber);
  card.appendChild(breakline);
  card.appendChild(websiteurl);

  //Addd the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

let data = getMembers();

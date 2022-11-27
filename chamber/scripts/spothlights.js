//DISPLAY MEMBERS spothlights| MAIN
const requestURL = 'json/data.json';
const spothlights = document.querySelector('.spothlights');

async function getMembers() {
  const response = await fetch(requestURL);
  if(response.ok) {
    const data = await response.json();
    data.members.forEach(member => {displaymembers(member)})
  }
} 

function displaymembers(member) {
    // Create elements to add to the document
    let spothlight = document.createElement('section');
    let h3 = document.createElement('h3');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let phonenumber = document.createElement('a');
    let websiteurl = document.createElement('a');
    let breakline = document.createElement('br');
    
    // Change the textContent property of the elements to contain the json information
    h3.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phonenumber.innerHTML = `${member.phonenumber}`;
    phonenumber.href= `tel:${member.phonenumber}`;
    websiteurl.textContent = `Website`;
    websiteurl.href =  `${member.websiteurl}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', member.image);
    portrait.setAttribute('alt', `${member.name} logo`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(spothlight) with the h3 element
    if (member.membershiplevel == "Gold") {
    spothlight.appendChild(h3); 
    spothlight.appendChild(portrait);  
    spothlight.appendChild(address);
    spothlight.appendChild(phonenumber);
    spothlight.appendChild(breakline);
    spothlight.appendChild(websiteurl);
  
    // Add/append the existing HTML div with the spothlights class with the section(spothlight)
    spothlights.appendChild(spothlight);
    }
}

let data = getMembers()
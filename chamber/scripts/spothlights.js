//DISPLAY MEMBERS spothlights| MAIN
const requestURL = "json/data.json";
const spothlights = document.querySelectorAll(".spothlights section");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const organizations = jsonObject["members"];
    const filter = organizations.filter((members) => {
      return (
        members.membershiplevel == "Silver" || members.membershiplevel == "Gold"
      );
    });

    spothlights.forEach((spotlight) => {
      const randomnumber = Math.floor(Math.random() * filter.length);
      const members = filter[randomnumber];
      filter.splice(randomnumber, 1);

      // Create elements to add to the document
      let name = document.createElement("h3");
      let logo = document.createElement("img");
      let hr = document.createElement("hr");
      let address = document.createElement("p");
      let phonenumber = document.createElement("a");
      let websiteurl = document.createElement("a");
      let breakline = document.createElement("br");

      // Change the textContent property of the elements to contain the json information
      name.textContent = `${members.name}`;
      address.textContent = `${members.address}`;
      phonenumber.innerHTML = `${members.phonenumber}`;
      phonenumber.href = `tel:${members.phonenumber}`;
      websiteurl.textContent = `Website`;
      websiteurl.href = `${members.websiteurl}`;

      // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
      logo.setAttribute("src", members.image);
      logo.setAttribute("alt", ` ${members.name} logo`);
      logo.width = 200;
      logo.height = 200;
      logo.setAttribute("loading", "lazy");

      // Add the section(spothlight) with the elements
      spotlight.appendChild(name);
      spotlight.appendChild(logo);
      spotlight.appendChild(hr);
      spotlight.appendChild(address);
      spotlight.appendChild(phonenumber);
      spotlight.appendChild(breakline);
      spotlight.appendChild(websiteurl);
    });
  });

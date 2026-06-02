const container = document.querySelector("#temples");
const yearSpan = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

const temples = [/* keep your array exactly the same */];

// Footer
yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    card.append(img, name, location, dedicated, area);
    container.appendChild(card);
  });
}

/* SAFE NAVIGATION HANDLING */
function setupFilters() {
  document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
  });

  document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
  });

  document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
  });

  document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples.filter(t => t.area > 90000));
  });

  document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples.filter(t => t.area < 10000));
  });
}

/* INIT */
setupFilters();
displayTemples(temples);
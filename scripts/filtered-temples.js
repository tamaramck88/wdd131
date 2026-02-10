const templesElement = document.querySelector("#temples");
const yearSpan = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: 1893,
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5a4f8b66f1c5c5d7f5f4c7e2c8e9b6d2a3f4d5e0/full/640%2C/0/default"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: 2019,
    area: 40000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/8c7f6c5d4b3a29181716151413121110/full/640%2C/0/default"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: 2004,
    area: 17500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/2f1e3d4c5b6a79888796959493929190/full/640%2C/0/default"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: 1919,
    area: 42100,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/a1b2c3d4e5f607182736455463728190/full/640%2C/0/default"
  }
];

function displayTemples(templeList) {
  templesElement.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Size: ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    templesElement.appendChild(card);
  });
}

displayTemples(temples);

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = link.dataset.filter;

    let filtered = temples;

    if (filter === "old") {
      filtered = temples.filter(t => t.dedicated < 1950);
    } else if (filter === "new") {
      filtered = temples.filter(t => t.dedicated >= 2000);
    } else if (filter === "large") {
      filtered = temples.filter(t => t.area > 90000);
    } else if (filter === "small") {
      filtered = temples.filter(t => t.area < 10000);
    }

    displayTemples(filtered);
  });
});

const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
      "images/salt-lake.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl:
      "images/hawaii.jpg"
  },
  {
    templeName: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88262,
    imageUrl:
      "images/cardston.jpg"
  },
  {
    templeName: "Mesa Arizona Temple",
    location: "Mesa, Arizona, USA",
    dedicated: "1927, October, 23",
    area: 113916,
    imageUrl:
      "images/mesa.jpg"
  },
  {
    templeName: "Idaho Falls Idaho Temple",
    location: "Idaho Falls, Idaho, USA",
    dedicated: "1945, September, 23",
    area: 85624,
    imageUrl:
      "images/idaho.jpg"
  },
  {
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, USA",
    dedicated: "2002, June, 27",
    area: 54000,
    imageUrl:
      "images/nauvoo.jpg"
  },
  {
    templeName: "Mount Timpanogos Utah Temple",
    location: "American Fork, Utah, USA",
    dedicated: "1996, October, 13",
    area: 107240,
    imageUrl:
      "images/mount-timpanogos.jpg"
  },
  {
    templeName: "Redlands California Temple",
    location: "Redlands, California, USA",
    dedicated: "2003, September, 14",
    area: 17700,
    imageUrl:
      "images/redlands.jpg"
  },
  {
    templeName: "Gilbert Arizona Temple",
    location: "Gilbert, Arizona, USA",
    dedicated: "2014, March, 2",
    area: 85000,
    imageUrl:
      "images/gilbert.jpg"
  },

  // Additional Temples

  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, USA",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "images/payson.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl:
      "images/paris.jpg"
  },
  {
    templeName: "Feather River California Temple",
    location: "Yuba City, California, USA",
    dedicated: "2023, October, 8",
    area: 7225,
    imageUrl:
      "images/feather-river.jpg"
  }
];

const container = document.querySelector(".temple-container");
const pageTitle = document.querySelector("#page-title");

function displayTemples(templesList) {
  container.innerHTML = "";

  templesList.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
    <h3>${temple.templeName}</h3>

    <div class="temple-info">
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
    </div>

    <img
        src="${temple.imageUrl}"
        alt="${temple.templeName}"
        loading="lazy"
    >
    `;

    container.appendChild(card);
  });
}

// Home
document.querySelector("#home").addEventListener("click", () => {
  pageTitle.textContent = "Home";
  displayTemples(temples);
});

// Old
document.querySelector("#old").addEventListener("click", () => {
  pageTitle.textContent = "Old Temples";
  displayTemples(
    temples.filter(temple => Number(temple.dedicated.slice(0, 4)) < 1900)
  );
});

// New
document.querySelector("#new").addEventListener("click", () => {
  pageTitle.textContent = "New Temples";
  displayTemples(
    temples.filter(temple => Number(temple.dedicated.slice(0, 4)) > 2000)
  );
});

// Large
document.querySelector("#large").addEventListener("click", () => {
  pageTitle.textContent = "Large Temples";
  displayTemples(
    temples.filter(temple => temple.area > 90000)
  );
});

// Small
document.querySelector("#small").addEventListener("click", () => {
  pageTitle.textContent = "Small Temples";
  displayTemples(
    temples.filter(temple => temple.area < 10000)
  );
});

// Footer
document.querySelector("#currentyear").textContent =
  new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

// Initial display
displayTemples(temples);
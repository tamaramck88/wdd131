const templesElement = document.querySelector("#temples");

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;

/* KEEP YOUR CURRENT temples ARRAY HERE */

function displayTemples(templesList) {
templesElement.innerHTML = "";

```
templesList.forEach((temple) => {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}"
             alt="${temple.templeName}"
             loading="lazy">
    `;

    templesElement.appendChild(card);
});
```

}

document.querySelector("#home").addEventListener("click", (e) => {
e.preventDefault();
displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
e.preventDefault();
displayTemples(
temples.filter(
temple => new Date(temple.dedicated).getFullYear() < 1900
)
);
});

document.querySelector("#new").addEventListener("click", (e) => {
e.preventDefault();
displayTemples(
temples.filter(
temple => new Date(temple.dedicated).getFullYear() > 2000
)
);
});

document.querySelector("#large").addEventListener("click", (e) => {
e.preventDefault();
displayTemples(
temples.filter(temple => temple.area > 90000)
);
});

document.querySelector("#small").addEventListener("click", (e) => {
e.preventDefault();
displayTemples(
temples.filter(temple => temple.area < 10000)
);
});

displayTemples(temples);

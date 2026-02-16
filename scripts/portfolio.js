const images = [
    { title: "Wedding 1", category: "wedding", src: "images/w1.jpg" },
    { title: "Portrait 1", category: "portrait", src: "images/p1.jpg" },
    { title: "Event 1", category: "event", src: "images/e1.jpg" }
];

const gallery = document.querySelector("#gallery");
const buttons = document.querySelectorAll(".filters button");

function displayImages(category) {
    gallery.innerHTML = "";

    const filtered = category === "all"
        ? images
        : images.filter(img => img.category === category);

    filtered.forEach(img => {
        gallery.innerHTML += `
            <figure>
                <img src="${img.src}" alt="${img.title}" loading="lazy">
                <figcaption>${img.title}</figcaption>
            </figure>
        `;
    });
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        localStorage.setItem("selectedCategory", category);
        displayImages(category);
    });
});

const savedCategory = localStorage.getItem("selectedCategory") || "all";
displayImages(savedCategory);

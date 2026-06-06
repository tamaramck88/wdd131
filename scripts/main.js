// ===============================
// South Africa Travel & Culture Guide
// main.js
// ===============================

// Footer Year
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ===============================
// Mobile Navigation Menu
// ===============================

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}

// ===============================
// Destinations Data
// ===============================

const destinations = [
    {
        city: "Cape Town",
        attraction: "Table Mountain",
        province: "Western Cape"
    },
    {
        city: "Johannesburg",
        attraction: "Apartheid Museum",
        province: "Gauteng"
    },
    {
        city: "Durban",
        attraction: "Golden Mile",
        province: "KwaZulu-Natal"
    },
    {
        city: "Pretoria",
        attraction: "Union Buildings",
        province: "Gauteng"
    }
];

// ===============================
// Display Destinations
// ===============================

function displayDestinations() {

    const container =
        document.querySelector("#destinations-container");

    if (!container) return;

    destinations.forEach(destination => {

        const card = document.createElement("article");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${destination.city}</h3>
            <p><strong>Attraction:</strong> ${destination.attraction}</p>
            <p><strong>Province:</strong> ${destination.province}</p>
        `;

        container.appendChild(card);

    });
}

displayDestinations();

// ===============================
// Wildlife Data
// ===============================

const animals = [
    "Lion",
    "Elephant",
    "Leopard",
    "Buffalo",
    "Rhino"
];

// ===============================
// Display Wildlife
// ===============================

function displayWildlife() {

    const wildlifeContainer =
        document.querySelector("#wildlife-container");

    if (!wildlifeContainer) return;

    animals.forEach(animal => {

        wildlifeContainer.innerHTML += `
            <div class="card">
                <h3>${animal}</h3>
                <p>
                    One of South Africa's famous Big Five animals.
                </p>
            </div>
        `;

    });
}

displayWildlife();

// ===============================
// Contact Form
// ===============================

const contactForm =
    document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.querySelector("#fullname").value;

        if (name.trim() === "") {

            alert("Please enter your name.");

        } else {

            alert(`Thank you, ${name}! Your message has been received.`);

            contactForm.reset();
        }

    });

}

// ===============================
// Newsletter Subscription
// ===============================

const subscribeButton =
    document.querySelector("#subscribeBtn");

if (subscribeButton) {

    subscribeButton.addEventListener("click", () => {

        const email =
            document.querySelector("#newsletterEmail").value;

        if (email === "") {

            alert("Please enter an email address.");

        } else {

            localStorage.setItem(
                "subscriberEmail",
                email
            );

            alert(
                `Thank you for subscribing with ${email}!`
            );

        }

    });

}

// ===============================
// Display Saved Subscriber
// ===============================

const savedEmail =
    localStorage.getItem("subscriberEmail");

if (savedEmail) {

    console.log(
        `Returning subscriber: ${savedEmail}`
    );

}

// ===============================
// Tourism Facts
// ===============================

const tourismFacts = [
    "South Africa has 11 official languages.",
    "Table Mountain is one of the New 7 Wonders of Nature.",
    "Kruger National Park is one of Africa's largest game reserves."
];

// Array Method Example
const factList =
    tourismFacts.map(fact => `<li>${fact}</li>`);

const factsContainer =
    document.querySelector("#tourism-facts");

if (factsContainer) {

    factsContainer.innerHTML = `
        <ul>
            ${factList.join("")}
        </ul>
    `;

}

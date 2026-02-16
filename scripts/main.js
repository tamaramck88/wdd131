const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

const form = document.querySelector("#contactForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const service = document.querySelector("#service").value;
        const confirmation = document.querySelector("#confirmation");

        if (name && service) {
            confirmation.textContent = `Thank you ${name}! Your ${service} booking request has been received.`;
            localStorage.setItem("lastBooking", name);
        } else {
            confirmation.textContent = "Please complete all required fields.";
        }
    });
}

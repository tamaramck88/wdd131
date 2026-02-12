const products = [
    { id: "p1", name: "Solar Panel X200" },
    { id: "p2", name: "Smart Thermostat Pro" },
    { id: "p3", name: "Eco Water Heater" },
    { id: "p4", name: "LED Lighting Kit" }
];

const productSelect = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

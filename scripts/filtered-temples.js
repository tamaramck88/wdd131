console.log("JS LOADED");

function setupFilters() {
  const home = document.querySelector("#home");
  const old = document.querySelector("#old");
  const newT = document.querySelector("#new");
  const large = document.querySelector("#large");
  const small = document.querySelector("#small");

  if (home) {
    home.addEventListener("click", (e) => {
      e.preventDefault();
      displayTemples(temples);
    });
  }

  if (old) {
    old.addEventListener("click", (e) => {
      e.preventDefault();
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
    });
  }

  if (newT) {
    newT.addEventListener("click", (e) => {
      e.preventDefault();
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
    });
  }

  if (large) {
    large.addEventListener("click", (e) => {
      e.preventDefault();
      displayTemples(temples.filter(t => t.area > 90000));
    });
  }

  if (small) {
    small.addEventListener("click", (e) => {
      e.preventDefault();
      displayTemples(temples.filter(t => t.area < 10000));
    });
  }
}
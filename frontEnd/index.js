/**
 * Cette fonction permet de déterminer si une card est affiché ou non.
 */
function displayCard() {
  fetch("./php/select.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.status === "200") {
        const result = data.result;
        let display;
        for (const r of result) {
          display = r.display === "1" ? "block" : "none";
          document.querySelector("." + r.name).style.display = display;
          document.querySelector("." + r.name + '_title').textContent = r.title;
        }
      }
    });
}

// On attend que le dom soit loadé.
(function () {
  // First init.
  displayCard();

  // Reload all 2 second time.
  setInterval(displayCard, 2000);
})();

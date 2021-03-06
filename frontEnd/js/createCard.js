/**
 * Cette fonction permet de créer une carte automatiquement
 * @param {string} name - Le nom de la carte
 * @param {string} classes - Attribute class pour le toggle.
 * @return {Node} - Élément HTML
 */
function createCard(name, classes) {
  /* 
    Création de tout les éléments HTML 
  */

  const section = document.createElement("section");
  section.classList.add("main-container_card");

  const article = document.createElement("article");
  article.classList.add("card");
  article.classList.add("flex");

  const titleCard = document.createElement("div");
  titleCard.classList.add("card_item");

  const title = document.createElement("h1");
  title.classList.add("item_name");
  title.textContent = `Item ${name}`;

  const subtitle = document.createElement("p");
  subtitle.classList.add("item_p");
  subtitle.textContent = "Boîte de gestion";

  const titleInputContainer = document.createElement("label");
  titleInputContainer.classList.add("item_titre");
  titleInputContainer.classList.add("flex");
  titleInputContainer.setAttribute("for", "title-input");

  const titleInput = document.createElement("h2");
  titleInput.classList.add("item_titre_h2");
  titleInput.textContent = "Titre de l'élément";

  const titleModifier = document.createElement("input");
  titleModifier.classList.add("item-titre_input");
  titleModifier.setAttribute("type", "text");
  titleModifier.setAttribute("id", "title-input");
  titleModifier.setAttribute("class", classes + '_title');
  titleModifier.setAttribute("name", classes);

  // Ajout d'un écouteur d'événement sur le champ de texte afin de pouvoir envoyé le contenue du titre à chaque changement ou à l'appuis de la touche entrée
  titleModifier.addEventListener("keydown", (event) => {
    const input = event.target;
    if (event.key === "Enter" && input.value.length >= 3) {
      const input = event.target;
      const xhttp = new XMLHttpRequest();
      xhttp.open("POST", "php/update.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      // Si la valeur est 1, alors on envoi 0 et inversement.
      const display = input.checked === true ? "1" : "0";
      xhttp.send("name=" + input.getAttribute('name') + "&title=" + input.value);
    }
  });

  const displayInputContainer = document.createElement("label");
  displayInputContainer.classList.add("item-display");
  displayInputContainer.classList.add("flex");

  const titleDisplayInputContainer = document.createElement("p");
  titleDisplayInputContainer.textContent = `Afficher l'élément ${name}`;

  const displayInput = document.createElement("input");
  displayInput.setAttribute("type", "checkbox");
  displayInput.setAttribute("name", "display-element");
  displayInput.setAttribute("id", `display-element-${name}`);
  displayInput.setAttribute("class", classes);

  const toggle = document.createElement("div");
  toggle.classList.add("toggle");

  const slider = document.createElement("div");
  slider.classList.add("slider");

  fetch("php/select.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.status == "200") {
        const result = data.result;
        for (const r of result) {
          document
              .querySelector("." + r.name + '_title')
              .value = r.title;
          if (r.display === "1") {
            document
              .querySelector("." + r.name)
              .setAttribute("checked", "checked");
          }
        }
      }
    });

  // Ajout d'un écouteur d'événement sur la checkbox afin de pouvoir cacher ou afficher l'élément
  displayInput.addEventListener("click", (event) => {
    // On envoi l'info à la base de données du display du button.
    const input = event.target;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/update.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Si la valeur est 1, alors on envoi 0 et inversement.
    const display = input.checked === true ? "1" : "0";
    xhttp.send("name=" + input.className + "&display=" + display);
  });
  /*
    Assemblage des éléments  
  */

  // Assemblage du slider
  toggle.appendChild(slider);

  // Assemblage du composant de gestion de l'affichage du titre
  displayInputContainer.appendChild(titleDisplayInputContainer);
  displayInputContainer.appendChild(displayInput);
  displayInputContainer.appendChild(toggle);

  // Assemblage du modificateur de titre
  titleInputContainer.appendChild(titleInput);
  titleInputContainer.appendChild(titleModifier);

  // Assemblage du titre de la carte
  titleCard.appendChild(title);
  titleCard.appendChild(subtitle);

  // Assemblage de la carte
  article.appendChild(titleCard);
  article.appendChild(titleInputContainer);
  article.appendChild(displayInputContainer);

  // Assemblage du container générale de la carte
  section.appendChild(article);

  return section;
}

export default createCard;

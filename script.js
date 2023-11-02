const container = document.querySelector(".container");

// Créer un portfolio pour stocker les utilisateurs dans un tableau
let users = [];
fetch("https://randomuser.me/api/?results=20")
  .then((response) => response.json())
  .then((data) => {
    // Ajouter les utilisateurs dans le tableau
    users = data.results;
    // Afficher les utilisateurs dans le container
    displayUsers();
  });

// Afficher les utilisateurs dans le container
function displayUsers() {
  container.innerHTML = "";
  users.forEach((user) => {
    const registrationDate = new Date(user.registered.date);
    const daysRegistered = calculateDaysRegistered(registrationDate);
    const div = document.createElement("div");
    div.classList.add("user");
    div.innerHTML = `
        <img src="${user.picture.large}" alt="profile picture">
        <h3> ${user.name.title} ${user.name.first} ${user.name.last}</h3>   
        <p>${user.email}</p>
        <p>${
          user.gender === "male"
            ? "<i class='bx bx-male-sign'></i>"
            : "<i class='bx bx-female-sign' ></i>"
        }</p>
        <p>Inscrit depuis ${daysRegistered} jours</p>

        `;
    container.appendChild(div);
  });
}

// Rechercher depuis combien de temps l'utisateur est inscrit
function calculateDaysRegistered(registrationDate) {
  const currentDate = new Date();
  const timeDifference = currentDate - registrationDate;
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convertir la différence en jours
}

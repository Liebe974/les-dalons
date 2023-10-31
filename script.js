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
        const div = document.createElement("div");
        div.classList.add("user");
        div.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="profile picture">
        <h3> ${user.name.title} ${user.name.first} ${user.name.last}</h3>   
        <p>${user.gender.toUpperCase()}</p>
        <p>${user.email}</p>
        `;
        container.appendChild(div);
    })};
//Variables para acceder al HTML
//Nav ya esta definido en @darkmode.js
const iconButton = document.querySelector('.icon');
//Evento para el responsive del navbar
iconButton.addEventListener('click', (e) => {
    if (nav.className === "navBar"){
        nav.className += " responsive";
    } else {
        nav.className = "navBar";
    }
});


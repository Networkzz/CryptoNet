//Variables para acceder al HTML
const darkMode = document.getElementById('dark-mode'),
lightMode = document.getElementById('light-mode'),
main = document.querySelector('main'),
footer = document.querySelector('footer'),
footerLink = document.querySelectorAll('.link-footer'),
linkLogin = document.querySelectorAll('.container-login'),
nav = document.querySelector('nav'),
navLink = document.querySelectorAll('.nav-link'),
loginA = document.getElementById('dark-select'),
signupA = document.getElementById('dark-select-2');
//evento para activar el modo oscuro
darkMode.addEventListener('click', (e) => {
    main.style.background = "#424242 "
    main.style.color = '#E0E0E0';
    nav.style.background = '#100F10';
    nav.style.color = '#ffffff';
    footer.style.background = '#100F10 ';
    footer.style.color = '#ffffff';
    loginA.style.color = '#ffffff';
    signupA.style.color = '#ffffff';
    //for para recorrer todas las clases
    for(let i = 0; i < footerLink.length; i++){
        footerLink[i].style.color = '#ffffff';
        navLink[i].style.color = '#ffffff';
    }
});
<<<<<<< HEAD
=======


>>>>>>> 250730eb67eed65c58deb3229ce5e5264c4ce4d2
//evento para activar el modo claro, vuelve al estado default
lightMode.addEventListener('click', (e) => {
    main.style.background = ""
    main.style.color = '';
    nav.style.background = '';
    nav.style.color = '';
    footer.style.background = '';
    footer.style.color = '';
<<<<<<< HEAD
    loginA.style.color = '';
    signupA.style.color = '';
    //for para recorrer todas las clases
    for(let i = 0; i <= footerLink.length; i++){
        footerLink[i].style.color = '';
        navLink[i].style.color = '';
    }
=======
    //for para recorrer todas las clases
    for(let i = 0; i <= footerLink.length; i++){
        footerLink[i].style.color = '';
    }
    footerLink.style.color = '';
>>>>>>> 250730eb67eed65c58deb3229ce5e5264c4ce4d2
})
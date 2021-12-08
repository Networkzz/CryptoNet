//Obteniendo los elementos del HTML
const mainButton = document.getElementById('main-button')
secondButton = document.getElementById('second-button'),
thirdButton = document.getElementById('third-button'),
forthButton = document.getElementById('forth-button'),
fifthButton = document.getElementById('fifth-button'),
sixthButton = document.getElementById('sixth-button'),
lastButton = document.getElementById('last-button');

//Funciones que añaden funcionalidad a los botones de la pagina 404
mainButton.addEventListener('click',(e) => {
    secondButton.style.display = 'block';
})

secondButton.addEventListener('click', (e) => {
    thirdButton.style.display = 'block';
})

forthButton.addEventListener('click', (e) => {
    alert('Sadly, you are wrong');
})

fifthButton.addEventListener('click', (e) => {
    alert("Yeah, I'm making you waste time");
})

sixthButton.addEventListener('click', (e) => {
    lastButton.style.display = 'block';
    alert('Scroll down');
})

//Obteniendo los elementos del HTML
const mainButton = document.getElementById('main-button') //boton primario
secondButton = document.getElementById('second-button'), //boton secundario
thirdButton = document.getElementById('third-button'), //boton tercero
forthButton = document.getElementById('forth-button'), // boton cuarto
fifthButton = document.getElementById('fifth-button'), //boton quinto
sixthButton = document.getElementById('sixth-button'), //boton sexto
lastButton = document.getElementById('last-button'); //boton ultimo (salida)

/*Funciones que añaden funcionalidad a los botones de la pagina 404, todos estan display:hidden, este evento hace que vayan
apareciendo segun va pulsandolos el usuario*/
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

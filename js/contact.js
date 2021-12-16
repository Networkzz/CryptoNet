//Variables para acceder al HTML
const captcha = document.querySelector(".captcha"), //captcha
captchaInput = document.querySelector(".captcha-input"), //input del captcha del usuario
captchaText = document.querySelector(".captcha-text"), //mensaje generado para el usuario
captchaButtonContact = document.querySelector(".captcha-button-contact"), //boton que incia el evento del contact
buttonPopUp = document.querySelector('.closebtn'), //boton mensaje popup (contact.html)
message = document.getElementById('message'), //input usuario contact message
messagePopUp = document.querySelector('.alert'), //popup de (contact.html)
email = document.getElementById('email'), //input email
subject = document.getElementById('subject'), //input subject
messageArea = document.getElementById('message'), //input message (contact.html)
emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, //patron basico de email, debe contener caracteres + @ + caracteres + . + caracteres
passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; //patron password, debe tener un digito, una miniscula, una mayuscula y debe tener una longitud de almenos 8


//Bloquea que no se pueda copiar el captcha (obviamente se puede cancelar desde el navegador, pero al menos añade algo de seguridad)
captcha.oncopy = function(){return false};

//Array de todos los caracteres
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Funcion que genera un nuevo captcha utilizando el array anterior y obteniendo posiciones random y vinculandono con la clase captcha de HTML
function getCaptcha(){
    for (let i = 0; i < 6; i++) { 
        let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomCharacter}`;
    }
}
//Llamada a la funcion cada vez que se entre en la pagina para generar un captcha aleatorio
getCaptcha();
//Funcion validacion signup
//Funcion que atribuye al boton un evento que comprueba si el captcha coincide con el input del usuario.
captchaButtonContact.addEventListener("click", (e) => {
    e.preventDefault();
    let success = 0;
    //Limpia espacios de los inputs del usuario
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    captchaText.style.display = "block";
    //El captcha esta dividido por espacios, asi elimina los espacios y es mas facil de trabajar
    let userInput = captchaInput.value.split('').join(' ');
    //Compara el input del usuario con el captcha, crea texto en el HTML y cambia estilo del input del usuario.
    if(userInput == captcha.innerText){
        captchaText.style.color = "#4db2ec";
        captchaText.innerText = "You don't appear to be a robot.";
        captchaInput.style.border = '2px solid #93FA60';
        success = success +1;
    }
    //Cambia el color del input, genera texto html
    else{
        captchaText.style.color = "#ff0000";
        captchaText.innerText = "Captcha not matched. Please try again!";
        captchaInput.style.border = '2px solid #ff0000';
    }

    //comprueba si el email tiene el patron definido previamente y cambia el estilo del input
    if (emailValue.match(emailPattern)) {
        email.style.border = '2px solid #93FA60';
        success = success +1;
    }
    else {
        email.style.border = '2px solid #ff0000';
    }
    //comprueba si el subject es mayor a 10 y menor a 35, ademas cambia estilo del input
    if(subjectValue.length >= 10 && subject.length <= 35){
        subject.style.border = '2px solid #93FA60';
        success = success +1;
    }
    else {
        alert('Subject need to be longer than 10');
        subject.style.border = '2px solid #ff0000';
    }
    //comprueba si el subject es mayor a 10 y menor a 35, ademas cambia estilo del input
    if(messageValue.length >= 40 && messageValue.length <= 400){
        message.style.border = '2px solid #93FA60';
        success = success +1;
    }
    else {
        alert('Message need to be longer than 40');
        message.style.border = '2px solid #ff0000';
    }
    //popUp para la pagina de contacto
    //al no haber un backend, para tener un control de si el usuario ha hecho un registro optimo, se crea un contador que va sumando en caso de que el usuario introduzca bien los inputs
    if(success == 4){
        messagePopUp.style.display = "block";
    }
});
//evento que permite cerrar el popup tras enviar el contact
buttonPopUp.addEventListener('click', (e) => {
    messagePopUp.style.display = 'none';
})
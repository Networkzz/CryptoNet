//Variables para acceder al HTML
const captcha = document.querySelector(".captcha"),
captchaInput = document.querySelector(".captcha-input"),
captchaText = document.querySelector(".captcha-text"),
captchaButton = document.querySelector(".captcha-button");

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
//Funcion que atribuye al boton un evento que comprueba si el captcha coincide con el input del usuario.
captchaButton.addEventListener("click", e=> {
    e.preventDefault();
    captchaText.style.display = "block";
    //El captcha esta dividido por espacios, asi elimina los espacios y es mas facil de trabajar
    let userInput = captchaInput.value.split('').join(' ');

    if(userInput == captcha.innerText){
        captchaText.style.color = "#4db2ec";
        captchaText.innerText = "You don't appear to be a robot.";
    }
    else{
        captchaText.style.color = "#ff0000";
        captchaText.innerText = "Captcha not matched. Please try again!";
    }
});
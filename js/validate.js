//Variables para acceder al HTML
const email = document.getElementById('email'),
password = document.getElementById('password'),
confPassword = document.getElementById('confpassword'),
formButton = document.querySelector(".captcha-button");

formButton.addEventListener('click', (e) => {
    if (email.value === '' || email.value == null){
        alert('Email is required');
    }

    if(password.value.length <= 10){
        alert('Password must be longer than 10');
    }

    if(password.value.length >= 20){
        alert('Password must be shorter than 20');
    }

    if(password.value === 'password' || password.value === 'Password'){
        alert('Do not use password as your password please :)');
    }

    if(password.value != confPassword.value){
        alert('Passwords are not the same, try again');
    }
})
function validateForm() {
    let emailValidate = document.forms["form-signup"]["email"].value;
        if (emailValidate == validateEmail()) {
        alert("Fill the email adress correctly");
        return false;
        }
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
validateForm();
validateEmail();
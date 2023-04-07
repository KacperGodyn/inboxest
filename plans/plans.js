const submitBtn = document.getElementById('submit-btn');
const username = document.getElementById("login");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("reg-password-confirm");
const passwordsError = document.getElementById("passwordsError");

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    console.log(`Username: ${username.value}, Password: ${password.value}`);
    console.log(`Passwords are the same: ${checkPasswords(password.value, passwordConfirmation.value)}`);

    function checkPasswords(password, passwordConfirmation) {
        if(password != "" && passwordConfirmation != "") {
            if (password === passwordConfirmation) {
                redirect();
                return true;
            }
        } else {
            return false;
        }
    }

    if(checkPasswords(password.value, passwordConfirmation.value)) {
        passwordsError.style.display = 'none';
    } else {
        passwordsError.style.display = 'block';
    }
});

function redirect() {
    window.location.href = "../mails.html";
}

document.getElementById("sign-up").addEventListener('click',signUp);

const userName = document.getElementById('SIGN_USERNAME');
const email = document.getElementById('SIGN_EMAIL');
const password = document.getElementById('SIGN_PASSWORD');

function signUp(){
    alert("a");
    isValidUserNameLength();
    isValidEmail();
    validateUserPassword();
}

function isValidUserNameLength(){
    if(userName.value.length > 2 && userName.value.length < 32){
        alert("굳");
    }
}
function isValidEmail(){
    if(email.value.length > 0 && email.value.indexOf("@") != -1){
        alert("굳")
    }
}

function validateUserPassword() {

    var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(reg.test){
        alert("굳");
    }

    
}

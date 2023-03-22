document.getElementById("sign-up").addEventListener('click',signUp);

const userName = document.getElementById('SIGN_USERNAME');
const email = document.getElementById('SIGN_EMAIL');
const password = document.getElementById('SIGN_PASSWORD');

function signUp(){
    alert("a");
    validateUserNameLength();
    validateEmail();
    validateUserPassword();
}

function validateUserNameLength(){
    if(userName.value.length >= 2 && userName.value.length < 32){
        alert("이름 굳");
    }
}
function validateEmail(){
    if(email.value.length > 0 && email.value.indexOf("@") != -1){
        alert("이메일 굳")
    }
}

function validateUserPassword() {
    var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(reg.test(password.value)){
        alert("패스워드 굳");
    }
}

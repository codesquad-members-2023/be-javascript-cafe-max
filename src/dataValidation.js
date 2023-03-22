const check = [false, false, false];

function verifyEmail() {
    const email = document.getElementById("email").value;
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

    if(regExp.test(email)) {
        document.getElementById('emailMessage').innerText = "올바른 이메일 형식입니다.";
        document.querySelector('#email').style.border = "2px solid rgb(186, 75, 238)";
        document.querySelector('#emailMessage').style.color = "rgb(186, 75, 238)";
        check[0] = true;
    } else {
        document.getElementById('emailMessage').innerText = "잘못된 이메일 형식입니다.";
        document.querySelector('#email').style.border = "2px solid red";
        document.querySelector('#emailMessage').style.color = "red";
        check[0] = false;
    }
}

function verifyNickname() {
    const nickname = document.getElementById("nickname").value;

    if(nickname.length >= 2 && nickname.length <= 64) {
        document.getElementById('nicknameMessage').innerText = "올바른 닉네임입니다.";
        document.querySelector('#nickname').style.border = "2px solid rgb(186, 75, 238)";
        document.querySelector('#nicknameMessage').style.color = "rgb(186, 75, 238)";
        check[1] = true;
    } else {
        document.getElementById('nicknameMessage').innerText = "닉네임은 2글자 이상 64글자 이하여야 합니다.";
        document.querySelector('#nickname').style.border = "2px solid red";
        document.querySelector('#nicknameMessage').style.color = "red";
        check[1] = false;
    }
}

function verifyPassword() {
    const password = document.getElementById("password").value;
    const reg = /(?=.*\d)(?=.*[a-z]).{8,32}/;

    if(reg.test(password)) {
        document.getElementById('passwordMessage').innerText = "올바른 비밀번호 형식입니다.";
        document.querySelector('#password').style.border = "2px solid rgb(186, 75, 238)";
        document.querySelector('#passwordMessage').style.color = "rgb(186, 75, 238)";
        check[2] = true;
    } else {
        document.getElementById('passwordMessage').innerText = "비밀번호는 8글자 이상 32글자 이하, 영어 소문자 및 숫자를 반드시 포함해야합니다.";
        document.querySelector('#password').style.border = "2px solid red";
        document.querySelector('#passwordMessage').style.color = "red";
        check[2] = false;
    }
}

function validateData() {
    if(check[0] && check[1] && check[2]) {
        window.location.href='signUpCompleted.html'
    } else {
        document.getElementById('allMessage').innerText = "모든 사항을 올바르게 기입해주세요.";
        document.querySelector('#allMessage').style.color = "red";
    }
}
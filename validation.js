function validateAll() {
    const email = checkEmail();
    const nickname = checkNickname();
    const password = checkPassword();

    if (email && nickname && password) {
        alert("회원가입이 완료되었습니다");
    }
}

function checkEmail() {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const email = document.getElementById('inputEmail').value;
    const message = document.querySelector('.checkEmail');

    if (!emailRegex.test(email)) {
        message.classList.remove('hide');
        signUp.inputPassword.focus();
        return false;
    }

    message.classList.add('hide');
    return true;
}

function checkNickname() {
    const nickname = document.getElementById('inputNickname').value;
    const message = document.querySelector('.checkNickname');

    if (nickname.length < 2 || nickname.length > 64) {
        message.classList.remove('hide');
        signUp.inputPassword.focus();
        return false;
    }

    message.classList.add('hide');
    return true;
}

function checkPassword() {
    const passwordRegex = /^(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/;
    const password = document.getElementById('inputPassword').value;
    const message = document.querySelector('.checkPassword');

    if (!passwordRegex.test(password)) {
        message.classList.remove('hide');
        signUp.inputPassword.focus();
        return false;
    }

    message.classList.add('hide');
    return true;
}
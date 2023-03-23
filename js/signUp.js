function validateId() {
    const regex = new RegExp('[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,3}$');
    const email = document.querySelector('#email');
    const validateText = document.querySelector('#validationEmailFeedback');

    if (regex.test(email.value)) {
        email.className = 'form-control is-valid';
        return false;
    }

    validateText.textContent = '이메일 형식이 다릅니다.';
    email.className = 'form-control is-invalid';
    return true;
}

function validateName() {
    const regex = new RegExp('[a-z0-9]{2,64}$');
    const name = document.querySelector('#name');
    const validateText = document.querySelector('#validationNameFeedback');

    if (regex.test(name.value)) {
        name.className = 'form-control is-valid';
        return false;
    }

    validateText.textContent = '최소 2글자에서 최대 64글자입니다.';
    name.className = 'form-control is-invalid';
    return true;
}

function validatePassword() {
    const regex = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,32}$');
    const password = document.querySelector('#password');
    const validateText = document.querySelector('#validationPasswordFeedback');

    if (regex.test(password.value)) {
        password.className = 'form-control is-valid';
        return false;
    }

    validateText.textContent = '최소 8글자에서 최대 32글자이며, 영어 및 숫자가 반드시 포함되어 있어야 합니다.';
    password.className = 'form-control is-invalid';
    return true;
}

function signUp(event) {
    const isValidateId = validateId();
    const isValidateName = validateName();
    const isValidatePassword = validatePassword();

    if (isValidateId || isValidateName || isValidatePassword) {
        event.preventDefault();
        event.stopPropagation();
        return;
    }

    addMember();
}

function addMember() {
    const member = {
        id: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    };

    let users = localStorage.getItem('users');

    if (users === null) {
        let arr = [member];
        localStorage.setItem('users', JSON.stringify(arr));
        return;
    }

    users.push(member);
    localStorage.setItem('users', users);
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').addEventListener('submit', signUp);
});

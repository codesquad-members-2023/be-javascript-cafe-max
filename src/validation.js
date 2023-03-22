const form = document.getElementById('join-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

const isValidPassword = password => {
    const regex = /^(?=.*[a-z])(?=.*[0-9]).{8,32}$/;
    return regex.test(String(password));
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;

    if (usernameValue === '') {
        setError(username, '닉네임을 입력해주세요');
    } else if (usernameValue.length < 2 || usernameValue.length > 64) {
        setError(username, '닉네임은 2글자 이상 64글자 이하로 입력해주세요');
    } else {
        setSuccess(username);
        flag1 = true;
    }

    if (emailValue === '') {
        setError(email, '이메일을 입력해주세요');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '이메일 형식에 맞지 않습니다');
    } else {
        setSuccess(email);
        flag2 =true;
    }

    if (passwordValue === '') {
        setError(password, '비밀번호를 입력해주세요');
    } else if (passwordValue.length < 8 || passwordValue.length > 32) {
        setError(password, '비밀번호는 8글자 이상 32글자 이하로 입력해주세요');
    } else if (!isValidPassword(passwordValue)) {
        setError(password, '비밀번호는 영어 소문자 및 숫자 반드시 포함해야 합니다');
    } else {
        setSuccess(password);
        flag3 =true;
    }

    if (flag1 && flag2 && flag3) {
        form.submit();
    }
}
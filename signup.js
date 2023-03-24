const form = document.querySelector('form');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    let isValid = true;

// 이름 유효성 검사
    if (name.length < 2 || name.length > 64) {
        isValid = false;
        nameInput.classList.add('invalid');
        message.textContent = '이름은 2~64글자 이어야 합니다.';
    } else {
        nameInput.classList.remove('invalid');
    }

// 이메일 유효성 검사
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        emailInput.classList.add('invalid');
        message.textContent = '올바른 이메일 형식이 아닙니다.';
    } else {
        emailInput.classList.remove('invalid');
    }

// 패스워드 유효성 검사
    if (password.length < 8 || password.length > 32 || !/\d/.test(password) || !/[a-z]/.test(password)) {
        isValid = false;
        passwordInput.classList.add('invalid');
        message.textContent = '패스워드는 8~32글자, 영어 소문자와 숫자를 모두 포함해야 합니다.';
    } else {
        passwordInput.classList.remove('invalid');
    }

// 유효성 검사 통과시 메시지 출력
    if (isValid) {
        message.textContent = '회원가입이 완료되었습니다!';
    }
});
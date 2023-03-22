let isSignupSuccess = false;

function onSignupBtnClick() {
    const signupForm = document.querySelector('#signup-form');

    signupForm.addEventListener('submit', (e) => {
        if (!isSignupSuccess) {
            e.preventDefault();
        
            if (!validateEmail()) {
                alert('유효한 이메일 형식이 아닙니다.');
                return;
            }
            if (!validateNickname()) {
                alert('이름은 2글자 이상 64글자 이하여야 합니다.');
                return;
            }
            if (!validatePassword()) {
                alert('패스워드는 8글자 이상, 32글자 이하이며, 영어 소문자와 숫자를 반드시 포함해야 합니다.');
                return;
            }
        
            alert('회원가입이 완료되었습니다.');
            isSignupSuccess = true;
            onSignupSuccess();
        }
    });
}

function validateNickname() {
    const nickname = document.getElementById('nickname').value.trim();
    return nickname.length >= 2 && nickname.length <= 64;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword() {
    const password = document.getElementById('password').value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,32}$/;
    return passwordRegex.test(password);
}

function onSignupSuccess() {
    document.getElementById('guide-message').textContent = '가입이 완료되었습니다!';
    document.getElementById('nickname').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('password-form').style.display = 'none';

    const signupBtn = document.getElementById('signupBtn');
    signupBtn.textContent = '지금 로그인하기';

    const signupForm = document.getElementById('signup-form');
    signupForm.setAttribute("action", "/frontend/html/screens/login.html");
}

onSignupBtnClick();
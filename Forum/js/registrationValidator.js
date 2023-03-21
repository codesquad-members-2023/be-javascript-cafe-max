function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById("email").value.trim();
    const nickname = document.getElementById("nickname").value.trim();
    const password = document.getElementById("pwd").value.trim();
    const checkbox = document.getElementById("privacyCheck");

    const emailIsValid = validateEmail(email);
    const nicknameIsValid = validateNickname(nickname);
    const passwordIsValid = validatePassword(password);

    if (!emailIsValid) {
        alert("이메일 주소를 입력해주세요.");
        return;
    }
    if (!nicknameIsValid) {
        alert("2-16자의 영문, 숫자를 입력해주세요.");
        return;
    }
    if (!passwordIsValid) {
        alert("8자 이상의 영문 대소문자와 숫자 조합으로 입력해주세요.");
        return;
    }
    if (!checkbox.checked) {
        alert("개인정보 수집 및 이용약관에 동의해주세요.");
        return;
    }

    // Submit the form
    alert('회원가입이 완료되었습니다.');
    document.getElementById("registrationValidation").submit();
    window.location.href = "login.html";

}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateNickname(nickname) {
    const nicknameRegex = /^[A-Za-z0-9]{2,16}$/;
    return nicknameRegex.test(nickname);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}

document.getElementById("registrationValidation").addEventListener("submit", validateForm);

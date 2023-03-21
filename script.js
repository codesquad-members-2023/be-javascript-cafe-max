function validateAll() {
    let isEmailValidate = validEmail();
    let isNicknameValidate = validNickname();
    let isPasswordValidate = validPassword();
    return isEmailValidate && isNicknameValidate && isPasswordValidate;
}

function validEmail() {
    const emailRegex = /^[0-9a-zA-Z\_\-.]+@[0-9a-zA-Z\_\-.]+\.[a-z]{2,3}$/;
    let email = document.getElementById("email").value;
    if (!emailRegex.test(email)) {
        alert("올바른 이메일을 입력해주세요");
        return false;
    }
    return true;
}

function validNickname() {
    const MIN_LENGTH = 2;
    const MAX_LENGTH = 64;
    let nicknameLength = document.getElementById("nickname").value.length;
    if (nicknameLength < MIN_LENGTH || nicknameLength > MAX_LENGTH) {
        alert("닉네임을 2글자 이상 64자 이하로 입력해주세요");
        return false;
    }
    return true;
}

function validPassword() {
    const MIN_LENGTH = 8;
    const MAX_LENGTH = 32;
    const lowerCaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    let password = document.getElementById("password").value;
    let passwordLength = password.length;
    if (passwordLength < MIN_LENGTH || passwordLength > MAX_LENGTH) {
        alert("비밀번호를 8글자 이상 32자 이하로 입력해주세요");
        return false;
    }
    if (!lowerCaseRegex.test(password)) {
        alert("비밀번호에 영어 소문자를 포함시켜주세요");
        return false;
    }
    if (!numberRegex.test(password)) {
        alert("비밀번호에 숫자를 포함시켜주세요");
        return false;
    }
    return true;
}
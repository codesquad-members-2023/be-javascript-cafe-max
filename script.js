// alert("연결 확인");

function validEmail() {
    const email = document.getElementById("email").value;
    const valid = validateEmail(email);
    if (!valid) {
        alert("올바른 이메일을 입력해주세요");
    }
    return valid;
}

function validateEmail(email) {
    const emailRegex = /^[0-9a-zA-Z\_\-.]+@[0-9a-zA-Z\_\-.]+\.[a-z]{2,3}$/;
    return emailRegex.test(email);
}
function submit(){
    const signupForm = document.getElementById("signupForm")

    signupForm.addEventListener("submit", validate());
    function validate() {
        if(!validateEmail()) {
            alert("이메일 형식이 알맞지 않습니다.");
            return;
        }
        if(!validateNickname()) {
            alert("닉네임은 2이상 64이하의 글자수를 가져야 합니다.");
            return;
        }
        if(!validatePassword()) {
            alert("패스워드는 8이상 32이하의 글자수를 가져야 하며, 영어 소문자 및 숫자를 반드시 포함해야 합니다.");
            return;
        }
        alert("가입이 완료되었습니다.");
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
}

function validateNickname() {
    const nickname = document.getElementById("nickname").value;
    return nickname.length > 1 && nickname.length < 65;
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordRegex = /^[a-z0-9]{8,32}$/;
    return passwordRegex.test(password);
}

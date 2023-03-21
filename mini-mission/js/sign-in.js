const btn = document.querySelector("button");
const email = document.querySelector("input[name=email]");
const username = document.querySelector("input[name=username]");
const password = document.querySelector("input[name=password]");
const form = document.querySelector("form");

// navigation에 있는 button 클릭 시, 로그인 페이지로 이동
btn.addEventListener("click", function(){
    location.replace("login.html");
});

// 유효한 이메일인지 확인.
function validate_email(){
    const reg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return reg.test(email.value);
}

// 사용자 이름이 유효한지 확인
function validate_username(){
    const reg = /^\w{2,64}$/;
    return reg.test(username.value);
}

// 유효한 패드워드인지 확인.
function validate_password() {
    const reg = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,32}$/;
    return reg.test(password.value);
};

// 둘 다 유효하면 submit으로 넘어가기.
form.addEventListener("submit", function(event){
    event.preventDefault();
    if (validate_email() && validate_username() && validate_password()) {
        location.replace("sign-in-success.html");
    } else {
        let info_message = validate_email() ? "" : "이메일 ";
        info_message += validate_username() ? "" : "이름 ";
        info_message += validate_password() ? "" : "비밀번호 ";
        document.getElementById("access-denied-text").innerHTML = info_message + "을/를 다시 입력해주세요";
    }
});

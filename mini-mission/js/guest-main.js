const login_out = document.getElementById("login-out");
const form = document.querySelector("form");

// navigation에 있는 button 클릭 시, 로그인 페이지로 이동
login_out.addEventListener("click", function(){
    location.replace("login.html");
});

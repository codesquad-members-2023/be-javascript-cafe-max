const logout = document.getElementById("logout");
const main_page = document.getElementById("main-page");
const form = document.querySelector("form")
const submit = document.querySelector("input[type=submit]");

logout.addEventListener("click", function() {
    location.replace("../html/login.html");
});

main_page.addEventListener("click", function(){
    location.replace("../html/main.html");
});

function addPost(){
    
}

// 둘 다 유효하면 submit으로 넘어가기.
form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("게시물이 작성되었습니다.");
    addPost();
    location.replace("../html/main.html");
});

// 마우스를 submit 위로 올렸을 때, submit 밖으로 나갈 때 배경색 바뀌는 기능 추가
submit.addEventListener("mouseover", function(){
    submit.style.backgroundColor = "#14212B";
});

submit.addEventListener("mouseout", function(){
    submit.style.backgroundColor = "#4362D0";
});

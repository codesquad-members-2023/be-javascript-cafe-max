const user = JSON.parse(localStorage.getItem("user"));
localStorage.removeItem("user");
getEmail();
getNickname();

function getEmail() {
    document.getElementById('userEmail').innerHTML = user.email;
}

function getNickname() {
    document.getElementById('userNickname').innerHTML = user.nickname;
}
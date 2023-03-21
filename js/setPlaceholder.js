const urlParams = new URLSearchParams(window.location.search);
const register1email = urlParams.get("email");
const register1nickName = urlParams.get("nickName");

const email = document.getElementById("login-email");
email.placeholder = register1email;
const nickName = document.getElementById("login-nickName");
nickName.placeholder = register1nickName;

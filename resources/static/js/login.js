import {members} from "./members.js";

$(document).ready(function () {
  document.querySelector("#loginBtn").addEventListener("click", checkLogin)
})

function checkLogin(event) {
  event.preventDefault()
  const email = $("#email").val()
  const pwd = $("#pwd").val()

  if (checkMember(email, pwd)) {
    localStorage.setItem("loginMember", email)
    document.loginForm.submit()
  } else {
    alert("회원정보가 일치하지 않습니다.")
  }
}

function checkMember(email, pwd) {
  const member = members.findEmail(email)

  return member.email === email && member.pwd === pwd
}

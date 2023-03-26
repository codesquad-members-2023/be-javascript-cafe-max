import {members} from "./common.js";

$(document).ready(() => {
  $("#form").submit(login)
})

function login(event) {
  event.preventDefault()
  const email = $("#email").val()
  const pwd = $("#pwd").val()

  if (!checkMember(email, pwd)) {
    alert("회원정보가 일치하지 않습니다.")
    return;
  }

  localStorage.setItem("loginMember", email)
  document.form.submit()
}

function checkMember(email, pwd) {
  const member = members.findByEmail(email)
  if (member == null) {
    return false
  }
  return member.email === email && member.pwd === pwd
}

import {members} from "./members.js";

$(document).ready(function () {
  const email = localStorage.getItem("signup_success_email")
  const member = members.findEmail(email)
  console.log(member)
  $("#email").val(member.email)
  $("#nickname").val(member.nickname)

  $("#loginBtn").click(function () {
    location.href = "login.html";
  });
});

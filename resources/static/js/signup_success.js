import {members} from "./common.js";

$(document).ready(() => {
  const email = localStorage.getItem("signup_success_email")
  const member = members.findByEmail(email)
  $("#email").val(member.email)
  $("#nickname").val(member.nickname)

  $("#loginBtn").click(() => {
    location.href = "/be-javascript-cafe-max/resources/user/login.html";
  });
});

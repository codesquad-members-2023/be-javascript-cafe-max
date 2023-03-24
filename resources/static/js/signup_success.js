$(document).ready(function () {
  const email = localStorage.getItem("signup_success_email")
  const memberInfos = JSON.parse(localStorage.getItem("memberInfos"))
  const member = memberInfos.find((memberInfo) => memberInfo.email === email)
  $("#email").val(member.email)
  $("#nickname").val(member.nickname)

  $("#loginBtn").click(function () {
    location.href = "login.html";
  });
});

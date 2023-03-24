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
  const memberInfos = JSON.parse(localStorage.getItem("memberInfos"))
  const member = memberInfos.find((member) => member.email === email)

  return member.email === email && member.pwd === pwd
}

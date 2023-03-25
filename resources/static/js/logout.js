function logout() {
  localStorage.removeItem("loginMember")
  location.href = "/cafe/resources/user/login.html"
}

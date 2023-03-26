function logout() {
  localStorage.removeItem("loginMember")
  location.href = "/resources/user/login.html"
}



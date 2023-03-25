function checkLogin() {

  const email = localStorage.getItem("loginMember")
  if (email !== null) { // 로그인 상태
    let loginItems = $(".login.hidden")
    for (let i = 0; i < loginItems.length; i++) {
      loginItems[i].classList.remove("hidden")
    }

    let notLoginItems = $(".notLogin")
    for (let i = 0; i < notLoginItems.length; i++) {
      notLoginItems[i].classList.add("hidden")
    }
  }
}

export {checkLogin}

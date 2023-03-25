function checkLogin() {
  const email = localStorage.getItem("loginMember")
  if (email !== null) { // 로그인 상태
    let items = $(".login.hidden")
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("hidden")
    }

    items = $(".notLogin")
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add("hidden")
    }
  }
}

export {checkLogin}

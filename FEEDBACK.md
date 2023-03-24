## 그룹리뷰 피드백 : 폼 제출 막기

- 회원가입 입력 실패시 제출하지 않고 페이지 그대로 유지하기 위해서 event.preventDefault() 호출합니다.

```javascript
$(document).ready(function () {
  $("#signUpBtn").click(function (event) {
    event.preventDefault();
    checkSignupForm();
  });
});
```

## 문제를 겪고있는 것 : 로그인 여부에 따른 전용버튼 활성화/비활성화 시키기

태그의 클래스에 "hidden"이라고 붙힌 태그는 "display: none"을 설정하여 태그를 보이지 않도록 합니다.

또한 태그의 클래스에 "login"이라고 붙으면 로그인 된 상태에서 보여주는 태그가 됩니다.

반대로 "notlogin"이라는 클래스 붙으면 비 로그인된 상태에서 보여주는 태그가 됩니다.

```javascript
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
```


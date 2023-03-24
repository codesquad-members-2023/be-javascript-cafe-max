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

## 문제를 겪고있는 것

### 문제배경

로컬 스토리지를 이용하여 로그인/로그아웃을 구현하였는데 메인 페이지에서 새로고침을 할때마다

로그인된 상태의 페이지와 로그아웃된 상태의 페이지가 랜덤으로 출력되는 문제가 발생하였습니다.

### 문제원인

자바스크립트의 함수가 비동기적으로 동작하기 때문에 로컬스토리지에서 값을 가져오기 전에 로그아웃된 상태의

페이지를 렌더링합니다.




# 회원가입

## 데이터 검증

- 이름 : 글자수 2~64
- 이메일 : 일반적인 이메일 형식 준수
- 패스워드 : 8~32 글자 이하, 영어 소문자 및 숫자 반드시 포함

## include HTML

다음 코드는 외부에서 불러올 html 파일입니다.

content.html

```html
<a href="howto_google_maps.asp">Google Maps</a><br>
<a href="howto_css_animate_buttons.asp">Animated Buttons</a><br>
<a href="howto_css_modals.asp">Modal Boxes</a><br>
<a href="howto_js_animate.asp">Animations</a><br>
<a href="howto_js_progressbar.asp">Progress Bars</a><br>
<a href="howto_css_dropdown.asp">Hover Dropdowns</a><br>
<a href="howto_js_dropdown.asp">Click Dropdowns</a><br>
<a href="howto_css_table_responsive.asp">Responsive Tables</a><br>
```

그리고 다음과 같이 외부에서 부르고 싶은 html 파일을 작성합니다.

```html

<div w3-include-html="content.html"></div>
```

부르는 html 파일에서 script 태그안에 다음 함수를 작성합니다.

```html

<script>
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* 모든 HTML 태그들을 순회합니다. */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /* w3-include-html 속성을 가진 태그를 탐색합니다. */
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* 파일 이름으로서 속성 값을 사용하여 HTTP 리퀘스트를 만듭니다. */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }
            // 이 함수가 호출되자마자 속성을 제거합니다.
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* 함수 종료 */
        return;
      }
    }
  }

  includeHTML()
</script>
```

## 자바스크립트 유효성 검사

### 아이디 유효성 검사를 위한 정규식

```javascript
// 한글 또는 대소문자로 시작하고 2~64글자인지 검사합니다.
function isNickName(value) {
  const regExp = /^[a-zA-Zㄱ-힣]+[a-zA-Zㄱ-힣\d]{1,63}$/g;
  return regExp.test(value);
}
```

### 비밀번호 유효성 검사를 위한 정규식

```javascript
// 소문자 및 숫자를 포함하는 8~32글자인지 검사합니다.
function isPassword(value) {
  const regExp = /^(?=.*[a-zA-z])(?=.*\d).{8,16}$/;
  return regExp.test(value);
}
```

## 그룹리뷰 피드백

- 회원가입 입력 실패시 제출하지 않고 페이지 그대로 유지하기 위해서 event.preventDefault() 호출합니다.

```javascript
$(document).ready(function () {
  $("#signUpBtn").click(function (event) {
    event.preventDefault();
    checkSignupForm();
  });
});
```

## 데이터를 가지고 리다이렉트 하기

## 그룹리뷰 피드백

- 회원가입 입력 실패시 제출하지 않고 페이지 그대로 유지하기 위해서 event.preventDefault() 호출합니다.

```javascript
$(document).ready(function () {
  $("#signUpBtn").click(function (event) {
    event.preventDefault();
    checkSignupForm();
  });
});
```

## References

- [How TO - Include HTML](https://www.w3schools.com/howto/howto_html_include.asp)
- [일반 HTML 파일에 HTML include/imports 하는 방법](https://kyung-a.tistory.com/18)
- [JavaScript 자주 쓰는 정규식 모음 (아이디, 이메일, 비밀번호)](https://rateye.tistory.com/468)
- [데이터를 가지고 리다이렉트 하기](https://minhanpark.github.io/today-i-learned/redirect-with-data/)

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

## 로컬 스토리지와 세션 스토리지

- 로컬 스토리지 : 웹 페이지의 세션이 끝나더라도 지워지지 않는 브라우저 내의 데이터 저장공간
- 세션 스토리지 : 웹 페이지의 세션이 끝나면 지워지는 브라우저 내의 저장공간

### 로컬 스토리지 기본 API

```javascript
// 키에 데이터 쓰기
localStorage.setItem("key", value);

// 키로 부터 데이터 읽기
localStorage.getItem("key");

// 키의 데이터 삭제
localStorage.removeItem("key");

// 모든 키의 데이터 삭제
localStorage.clear();

// 저장된 키/값 쌍의 개수
localStorage.length;
```

### 로컬 스토리지 주의사항

- 로컬 스토리지에는 문자열 타입으로만 저장되기 때문에 숫자를 넣어도 문자열로 저장됩니다.

```
>
localStorage.setItem('num', 1)
undefined
> localStorage.getItem('num') === 1
false
> localStorage.getItem('num')
"1"
> typeof localStorage.getItem('num')
"string"
```

위와 같은 문제를 해결하기 위해서는 데이터를 JSON 형태로 저장하는 방법이 있습니다.

```
> localStorage.setItem('json', JSON.stringify({a: 1, b: 2}))
undefined
> JSON.parse(localStorage.getItem('json'))
{a: 1, b: 2}
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

## 어려운점

- 로컬 스토리지를 이용한 로그인-로그아웃 문제
    - 아무래도 비동기화적으로 작동하여 생기는 문제 같음
    - 코드 정리도 필요함

## References

- [How TO - Include HTML](https://www.w3schools.com/howto/howto_html_include.asp)
- [일반 HTML 파일에 HTML include/imports 하는 방법](https://kyung-a.tistory.com/18)
- [JavaScript 자주 쓰는 정규식 모음 (아이디, 이메일, 비밀번호)](https://rateye.tistory.com/468)
- [데이터를 가지고 리다이렉트 하기](https://minhanpark.github.io/today-i-learned/redirect-with-data/)
- [\[자바스크립트\] 웹 스토리지 (localStorage, sessionStorage) 사용법](https://www.daleseo.com/js-web-storage/)
- [\[Javascript Toy Project\] Register Page | 회원가입 페이지 만들기 토이프로젝트](https://velog.io/@eunjin/Javascript-Register-Page-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0)


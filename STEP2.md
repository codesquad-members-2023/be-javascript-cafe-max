# 메인페이지

## TODOLIST

- [x] 1 그룹에서 이전 버튼 누르면 1페이지로 이동하기
- [x] 현재 페이지의 버튼의 배경이 회색으로 만들기

## jquery selector와 document.getElementById 차이점

jquery selector로 태그를 가져오면 jquery 객체를 리턴합니다.

반대로 document.getElementById로 태그를 가져오면 DOM 객체를 리턴합니다.

jquery 객체로 가져와야 한다면 배열의 인덱스를 활용하여 가져올 수 있습니다.

```javascript
let prevButton = $("#page_prev_link")[0]
let prevButton = document.getElementById("page_prev_link")
```

가져올 태그가 id를 가져서 한 개만 가져온다면 document를 이용하여 DOM 객체로 가져오는 것이 좋아보입니다.

반대로 가져올 태그들이 여러개라면 jquery로 가져오는 것이 좋아보입니다.

## replaceWith

- 태그를 교체하는 함수입니다.

```javascript
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

## References

- [How TO - Include HTML](https://www.w3schools.com/howto/howto_html_include.asp)
- [일반 HTML 파일에 HTML include/imports 하는 방법](https://kyung-a.tistory.com/18)
- [JavaScript 자주 쓰는 정규식 모음 (아이디, 이메일, 비밀번호)](https://rateye.tistory.com/468)

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

## 자바스크립트 날짜와 시간 참조 및 포맷팅

```javascript
const today = new Date() // "2023-03-25T05:20:13.830Z"
console.log(today.toLocaleDateString()) // "2023. 3. 25.
```

```javascript
const now = new Date(); // 현재 시간

const year = now.getFullYear(); // 현재 연도
const month = now.getMonth() + 1; // 현재 월 (0부터 시작하므로 1을 더해줌)
const date = now.getDate(); // 현재 일
const day = now.getDay(); // 현재 요일 (0부터 시작하며 일요일은 0, 토요일은 6)

const hours = now.getHours(); // 현재 시간 (24시간 표기법)
const minutes = now.getMinutes(); // 현재 분
const seconds = now.getSeconds(); // 현재 초
const milliseconds = now.getMilliseconds(); // 현재 밀리초

const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(
    2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2,
    '0')}:${seconds.toString().padStart(2, '0')}`;
console.log(formattedDateTime); // 예시 출력: "2022-03-21 16:34:25"
```

## References

- [How TO - Include HTML](https://www.w3schools.com/howto/howto_html_include.asp)
- [일반 HTML 파일에 HTML include/imports 하는 방법](https://kyung-a.tistory.com/18)
- [JavaScript 자주 쓰는 정규식 모음 (아이디, 이메일, 비밀번호)](https://rateye.tistory.com/468)
- [모듈 내보내고 가져오기](https://ko.javascript.info/import-export)
- [JSON 파일 데이터 가져와서 리스트 만들기](https://velog.io/@sweet_pumpkin/Megabyte-School-JSON-%ED%8C%8C%EC%9D%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%80%EC%A0%B8%EC%99%80%EC%84%9C-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0#:~:text=JSON%20%ED%8C%8C%EC%9D%BC%20%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0,-%EC%95%84%EB%9E%98%EC%9D%98%20list&text=%EB%A8%BC%EC%A0%80%20fetch%EC%97%90%20url%EB%A1%9C,import%20%EC%93%B0%EB%A9%B4%20%EB%90%A8.)

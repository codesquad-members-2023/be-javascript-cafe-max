# [2단계] 메인 게시판 목록 페이지 / 글쓰기 페이지 구현
- 2023-03-21(화) ~ 2023-03-24(금)

---
# 기획
## 메인 페이지
### [1] header 만들기
### [2] nav에 글쓰기 버튼 만들기
### [3] JSON 으로 더미 데이터 만들기
### [4] 게시글 board 만들기
### [5] 페이징 구현

## 글 작성 페이지
### [1] 글 작성자 input, 제목 input, 본문 textarea, 작성 완료 button
### [2] 글 작성 검증 script 추가

---
# 만났던 에러
## js파일에서 파일을 읽어오는 경로
- js에서 `fetch(./data.json)`올 파일을 읽어 오니 현재 js 파일 기준이 아니라 js를 불러온 html이 기준 경로로 되어 있었다.
- `fetch(../js/data.json)`로 경로를 변경하여 해결
- 그럼 이 js파일을 재사용 한다면 절대경로를 써야 되는 건가?

## Access to fetch at '.../dummy_board_data.json' from origin 'null' has been blocked by CORS policy:
- `fetch()`로 json 파일을 읽어오려고 했는데 크롬 보안정책 때문에 .json 파일을 읽어올 수 없다
- 크롬 보안을 해제하거나 접근할 수 있는 웹서버에 json파일을 올려 다시 가져오는 방법 외에 없는 것 같다
- node.js express에는 이걸 해결할 수 있는 기능이 있는 듯
- [CORS란? CORS를 해결해보자](https://bohyeon-n.github.io/deploy/web/cors.html)
- [Fetch API 활용시 에러 해결 방법](https://grap3fruit.dev/blog/Fetch-API-%ED%99%9C%EC%9A%A9%EC%8B%9C-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95)
- [악명 높은 CORS 개념 & 해결법 - 정리 끝판왕](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#%EC%9A%94%EC%B2%AD_%EB%B0%A9%EC%8B%9D%EC%97%90_%EB%94%B0%EB%9D%BC_%EB%8B%A4%EB%A5%B8_cors_%EB%B0%9C%EC%83%9D_%EC%97%AC%EB%B6%80)


## tagName 같이 여러개 존재할 수 있는 DOM 객체들은 배열로 가져오게 된다
- `var tbody = document.getElementsByTagName("tbody")[0];`
  - 뒤에 `[0]`이거 안 붙이면 html에 tbody가 하나라도 tbody 배열로 가져오게 된다.

## javascript는 문자열 안에서 정수 계산이 안된다??? 그게 아니라 내가 타입을 정확이 지정해주지 않아서 생긴 문제
- `location.href = pathnameOfURL + "?page=" + (currentPage + pagingBarSize);`
- 여기서 `(currentPage + pagingBarSize)` 이걸 먼저 정수로 계산한 후 url에 붙여줄거라 예상하였으나 그냥 문자열로 붙여준다
- 다시 보니 currentPage를 URL의 queryString에서 가져와 문자열로 선언되어 발생한 문제
- `(Number(currentPage) + pagingBarSize)` 문자열을 숫자로 변환하여 해결

---
# 기타 궁금증
## javacript - post로 보낸 파라미터는 못 가져오나??
- 불가능
- post로 보낸 값은 서버에서만 처리하고 클라이언트 단으로 가지 않는다.

## form submit 할 때 - html 태그로 form 작성하기 vs JS로 form을 동적으로 만들어 주기
- 뭐 더 좋은게 있나?

## class name, tag name 으로 값을 가져올 때 배열로 가져오게 되는데 이건 변경에 유리하지 못한것 같다? 모두 id를 써야 하나?
  
## 중복되는 header를 분리할 수 있는 방법은 없을까?
- spring 할때는 `<%@include file="..."%>`이 있었는데 그냥 html은 안되는 건가?

---
# 도움이 된 사이트
1. [[[css3] table-layout - 콘텐츠 내용에 따라 셀 너비 지정](https://devjhs.tistory.com/642)](https://devjhs.tistory.com/642)
2. [CSS / overflow / 내용이 요소의 크기를 벗어났을 때 처리 방법 정하는 속성](https://www.codingfactory.net/10599)
3. [[CSS]css 가상 선택자 정리 및 비교 (nth-child, nth-of-type)](https://lalacode.tistory.com/6)
4. [CSS 패딩 (padding) 마진(margin) 상하좌우 방향과 순서 사용법](https://dewworld27.tistory.com/entry/CSS-%ED%8C%A8%EB%94%A9-padding-%EB%A7%88%EC%A7%84margin-%EC%83%81%ED%95%98%EC%A2%8C%EC%9A%B0-%EB%B0%A9%ED%96%A5%EA%B3%BC-%EC%88%9C%EC%84%9C-%EC%82%AC%EC%9A%A9%EB%B2%95)
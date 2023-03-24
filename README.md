# be-javascript-cafe-max

# 1일차 Step-1
## 회원가입,로그인 페이지,유효성검사
![Untitled (1)](https://user-images.githubusercontent.com/100547825/226436862-597cb75f-748b-4828-8982-7949ea214f9e.png)


html/css/js 모두 오랜만에 해서 생각보다 오래 걸렸던 것 같다.

또 코드를 짜다 보니깐 마음에 들지 않아 뭐가 더 나은지는 모르겠지만 코드를 다시 짰다.

꼼꼼하게 해서 나쁠 건 없지만 지금은 스프링이나 자바 공부에 집중해야 할 거 같아 내일부터는 최대한 빨리 미션을 해결하고 자바/스프링 공부하는 쪽으로 계획을 잡아봐야겠다.

# 2일차 Step-2
## 메인페이지(글목록페이지),글쓰기페이지,유효성검사,json 데이터를 html에 출력

![image](https://user-images.githubusercontent.com/100547825/226683828-e02ea3af-afc0-4a7b-ad29-d10b19c42fb1.png)
<img width="803" alt="image" src="https://user-images.githubusercontent.com/100547825/226594431-0d32567b-83d7-4d50-803f-28fb3ea3aaf5.png">
![image](https://user-images.githubusercontent.com/100547825/226685605-37bf695f-4a56-4a55-b31d-6341c9f6edf5.png)
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/100547825/226686849-414c1e50-d4ec-440a-b806-443f696303c0.png">

스크립트에서 생성한 jsonArray의 길이만큼 전체 글 수를 표기함.

스크립트에서 생성한 jsonArray를 활용해 반복문을 돌려 글마다 다른 제목과 유저, 조회 수를 넣어 주었고, 향후 게시물 개별로 이벤트를 넣을 수도 있을 거 같아 요소 각각의 id도 부여해 줬다. 그리고 DOM 을 이용해 해당하는 html 요소에 반복해서 출력시켰다.

글쓰기 페이지에서 글 내용에 공백만 있을 경우를 체크하는 유효성 검사를 했다.


피그마에 있는 css를 그대로 붙여 썼는데 모양이 다르게 나오는 게 있어서 css를 수정하느라 애를 먹었다.

피그마에 예시로 있는 프로토 타입과 다르면 최대한 똑같게 만들려 하다 보니 시간을 많이 썼고 오늘도 스프링 공부를 하지 못했다.

내일은 진짜 계획을 제대로 세워 간격이 안 맞아도 형태만 나오면 넘어가고 스프링 공부를 해야겠다.


# 3일차 Step-3

## TODO
- [x] Step-3 화면 구현 대충?하기
- [x] 기능 구현
- [ ] 스프링 강의 듣기

## 구현 내용

![image](https://user-images.githubusercontent.com/100547825/226831596-bd981381-42dd-4d04-8012-9390b2548d2d.png)

<img width="702" alt="image" src="https://user-images.githubusercontent.com/100547825/227005739-e1419a4b-f173-493f-bcb3-2f6e355c0571.png">

<img width="702" alt="image" src="https://user-images.githubusercontent.com/100547825/227010369-4746abef-7bf4-427a-83db-ad3a0eb4faed.png">

<img width="702" alt="image" src="https://user-images.githubusercontent.com/100547825/227010632-1fa6faa7-7f8f-4b55-b9f5-ab38c9f00e2d.png">

<img width="702" alt="image" src="https://user-images.githubusercontent.com/100547825/227011923-520405e0-5360-4d65-90d8-5d28c7207dba.png">


step-3 화면 구현
댓글 추가, 삭제 구현

댓글 등록

유저 번호는 댓글을 작성할 때마다 카운트를 +1 해주었고 댓글 내용은 html에 있는 input 값을 가져왔고, 시간은 js 내에서 현재 시간을 구했다.
값들을 전부 구한 후에 댓글 작성을 누르면 js에서 html을 작성해 html에 그려주었다.
댓글이 추가되면 댓글 수를 +1 해줬다.

댓글 삭제

유저 번호를 부여하면서 삭제 버튼 id에 num+유저 번호를 따로 주어 댓글을 식별할 수 있게 만들었다.
삭제를 클릭하게 되면 식별하기 위해 붙여놓은 삭제 버튼 id를 통해 해당 요소의 부모 요소에 접근하여 댓글 div 전체가 삭제된다.
댓글이 삭제되면 댓글 수를 -1 해줬다.

오늘은 어제보다 화면 구현을 빨리해서 다른 공부를 할 수 있었는데 농땡이 피우다 저녁 먹고 자버려서 댓글 구현을 늦게 하고 너무 늦게 끝마쳤다.
내일은 쉬는 시간 줄여서 공부할 생각이다.


# 4일차 Step-4

## 구현 내용
localstorage를 통해 로그인 여부, 로그아웃을 구현했다.

게시글 상세 페이지 이동 시 게시글 번호를 url에 붙여 페이지 이동을 시켰고, new URL(location.href).searchParams 을 이용하여 자바스크립트에서 변수로 사용하였다.

~~~ javascript
const urlParams = new URL(location.href).searchParams;
const num = urlParams.get('num');
~~~

localstorage를 통해 댓글을 저장하여 페이지 새로고침이나, 브라우저를 다시 열어도 댓글이 사라지지 않게 함


*localstorage
https://www.zerocho.com/category/HTML&DOM/post/5918515b1ed39f00182d3048


오늘 페어 리뷰가 끝나고 집중이 잘 안돼서 많이 구현하지 못했다.

localstorage의 value 값을 set 해줄 때 타입을 신경 안 쓰고 get, set을 반복하다 보니 원하는 값이 안뜰 때가 있었고, set을 해주지도 않아서 값들이 안 뜨는 것인데 원인을 다른 데서 찾는 등 삽질을 많이 했다. 아무래도 개념을 자세하게 모르고 사용법만 익혀서 쓰다 보니 그런 것 같다. 개념 공부를 조금 더 열심히 해야겠다는 생각이 들었다.



## TODO
목표는 GitHub의 static hosting 기능을 이용해 배포지만 할 수 있을지는 모르겠다....
- [ ] 댓글 삭제 하면 localstorage에서도 삭제해주기
- [ ] 게시판 글 작성
- [ ] GitHub의 static hosting 기능을 이용해 배포
- [ ] 스프링 강의 듣기?






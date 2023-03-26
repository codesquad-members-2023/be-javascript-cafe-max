import {members} from "./common.js";
import {Post} from "./post.js";
import {posts} from "./common.js";
import {checkLogin} from "./header.js";

$(document).ready(async function () {
  const loginEmail = localStorage.getItem("loginMember")

  // 로그인 영역 출력
  await checkLogin()

  $("#writeBtn").click(async function (event) {
    event.preventDefault()

    if (checkWriteForm()) {
      const id = posts.nextId()
      const title = $("#title").val()
      const content = $("#content").val()
      const writer = members.findByEmail(loginEmail).nickname
      const regDate = new Date()
      const newPost = new Post(id, title, content, writer, regDate)
      await writePost(posts, newPost)
      location.href = "/be-javascript-cafe-max/index.html"
    }
  });
})

/* 게시글 글쓰기 처리 */
function writePost(posts, newPost) {
  posts.add(newPost)
}

/* 글쓰기 유효성 검사 */

function checkWriteForm() {
  const title = $("#title").val();
  const content = $("#content").val();

  if (!isTitle(title)) {
    alert("제목 형식은 영문 대소문자, 한글, 숫자, 공백 문자, 특수문자로 구성된 1글자 이상이어야 합니다.");
    return false
  }

  if (!isContent(content)) {
    alert("내용 형식은 영문 대소문자, 한글, 숫자, 공백 문자, 특수문자로 구성된 3글자~1000글자 이내이어야 합니다.");
    return false
  }

  return true
}

/**
 * 제목 형식은 영문 대소문자, 한글, 숫자, 공백 문자, 특수문자로 구성된 1글자 이상이어야 합니다.
 * a-zA-Z: 영문 대소문자
 * ㄱ-ㅎ가-힣: 한글
 * 0-9: 숫자
 * \s: 공백 문자 (스페이스, 탭 등)
 * \~\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\\\|\;\:\'\"\,\<\.\>\/\?: 특수문자
 * @param title
 * @returns {boolean}
 */
function isTitle(title) {
  const regExp = /^[a-zA-Zㄱ-ㅎ가-힣0-9\s~!@#$%^&*()\-_+={}\[\]\\|;:'",<.>\/?]+$/;
  return regExp.test(title)
}

/**
 * 내용 형식은 영문 대소문자, 한글, 숫자, 공백 문자, 특수문자로 구성된 3글자~1000글자 이내이어야 합니다.
 * a-zA-Z: 영문 대소문자
 * ㄱ-ㅎ가-힣: 한글
 * 0-9: 숫자
 * \s: 공백 문자 (스페이스, 탭 등)
 * \~\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\\\|\;\:\'\"\,\<\.\>\/\?: 특수문자
 * @param title
 * @returns {boolean}
 */
function isContent(content) {
  const regExp = /^[a-zA-Zㄱ-ㅎ가-힣0-9\s~!@#$%^&*()\-_+={}\[\]\\|;:'",<.>\/?]{3,1000}$/;
  return regExp.test(content)
}

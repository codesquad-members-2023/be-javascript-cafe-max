import {posts, comments} from "./common.js";
import {checkLogin} from "./header.js";
import {members} from "./common.js";
import {Comment} from "./comment.js";

window.onload = async function () {
  checkLogin()

  const id = validateParam()
  const post = posts.findById(id)
  outputPost(post)
  await outputComment(id)

  // 댓글작성 버튼 클릭시 닉네임, 내용, 작성일자를 입력으로 받아 댓글을 작성합니다.
  $("#writeBtn").click(clickWriteBtn)

  // 삭제 버튼 이벤트 등록
  const comment_delBtn = $(".comment_delBtn")
  comment_delBtn.each((idx, item) => {
    const postId = $(item).data("postid")
    const commentId = $(item).data("commentid")
    $(item).click(() => clickDeleteBtn(postId, commentId))
  })

  // TODO: 다음글 이벤트 등록
}

function validateParam() {
  const params = new URLSearchParams(location.search)
  const id = params.get("id")
  if (id == null) {
    location.href = "/cafe/resources/index.html"
  }
  return id
}

function outputPost(post) {
  $("#title").text(post.title)
  $("#author").text(post.author)
  $("#regdate").text(toLocalDate(post.date))
  $("#views").text(post.views)
  $("#content").text(post.content)
}

function toLocalDate(date) {
  return new Date(date).toLocaleDateString()
}

async function outputComment(postId) {
  const commentsByPostId = await comments.findAllByPostId(postId)
  if (commentsByPostId !== undefined) {
    // 댓글 생성
    document.querySelector("#comment_list").replaceWith(
        buildComments(commentsByPostId))
  }

  // 댓글작성 작성자 아이디 출력
  document.querySelector("#commenter").textContent = members.findByEmail(
      localStorage.getItem("loginMember")).nickname
}

function buildComments(comments) {
  const ul = document.createElement("ul")
  comments.forEach(item => {
    ul.appendChild(buildComment(item))
  })
  return ul
}

function buildComment(comment) {
  const li = document.createElement("li")
  li.innerHTML = `
            <div class="comment_item">
            <div aria-label="댓글 작성자 이름" class="comment_item_writer">
              <label>${comment.commenter}</label>
            </div>
            <div aria-label="댓글 내용" class="comment_item_content">
              <p>${comment.content}</p>
            </div>
            <div aria-label="댓글 작성일자" class="comment_item_regdate">
              <label>${toLocalDateTime(comment.regDate)}</label>
            </div>
            <div aria-label="댓글 삭제 버튼영역" class="d-flex justify-content-end">
              <button class="btn btn-primary comment_delBtn" data-commentid="${comment.id}" data-postid="${comment.postId}">삭제</button>
            </div>
          </div>
          `
  return li
}

function toLocalDateTime(date) {
  const regDate = new Date(date)
  return `${regDate.getFullYear()}. 
          ${(regDate.getMonth() + 1).toString().padStart(2, '0')}. 
          ${regDate.getDate().toString().padStart(2, '0')}. 
          ${regDate.getHours().toString().padStart(2, '0')}:
          ${regDate.getMinutes().toString().padStart(2, '0')}`
}

async function clickWriteBtn(event) {
  event.preventDefault()
  const id = comments.nextId()
  const commenter = $("#commenter").text()
  const content = $("#comment_content").val()
  const regDate = new Date()
  const postId = validateParam()

  const comment = new Comment(id, commenter, content, regDate, postId)
  comments.add(comment)
  location.href = "/cafe/resources/board/detail.html?id=" + postId
}

function clickDeleteBtn(postId, id) {
  comments.remove(id)
  location.href = "/cafe/resources/board/detail.html?id=" + postId
}


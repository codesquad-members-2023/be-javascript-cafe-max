import {createPosts, Posts} from "./posts.js";
import {checkLogin} from "./header.js";
import {members} from "./members.js";
import {Post} from "./post.js";
import {Comment} from "./comment.js";

window.onload = async function () {
  checkLogin()

  const id = validateParam()
  const post = await findPostById(id)
  outputPost(post)
  await outputComment(id)

  // 댓글작성 버튼 클릭시 닉네임, 내용, 작성일자를 입력으로 받아 댓글을 작성합니다.
  document.querySelector("#writeBtn")
  .addEventListener("click", clickWriteBtn)

  // 다음글 이벤트 등록

}

function validateParam() {
  const params = new URLSearchParams(location.search)
  const id = params.get("id")
  if (id == null) {
    location.href = "/cafe/resources/index.html"
  }
  return id
}

async function findPostById(id) {
  const datas = await createPosts()
  const posts = new Posts(datas)
  return posts.findById(id)[0]
}

function outputPost(post) {
  $("#title")[0].textContent = post.title
  $("#author")[0].textContent = post.author
  $("#regdate")[0].textContent = toLocalDate(post.date)
  $("#views")[0].textContent = post.views
  $("#content")[0].textContent = post.content
}

function toLocalDate(date) {
  return new Date(date).toLocaleDateString()
}

async function outputComment(postId) {
  const posts = new Posts(await createPosts())
  const findPost = posts.findById(postId)[0]
  const comments = findPost.comments

  // 댓글 생성
  document.querySelector("#comment_list").replaceWith(buildComments(comments))

  // 댓글작성 작성자 아이디 출력
  document.querySelector("#commenter").textContent =
      members.findEmail(localStorage.getItem("loginMember")).nickname
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
  const result = `
            <div class="comment_item">
            <div aria-label="댓글 작성자 이름" class="comment_item_writer">
              <label>${comment.commenter}</label>
            </div>
            <div aria-label="댓글 내용" class="comment_item_content">
              <p>${comment.content}</p>
            </div>
            <div aria-label="댓글 작성일자" class="comment_item_regdate">
              <label>${toLocalDateTime(comment.regdate)}</label>
            </div>
            <div aria-label="댓글 삭제 버튼영역" class="d-flex justify-content-end">
              <button class="btn btn-primary comment_delBtn">삭제</button>
            </div>
          </div>
          `
  li.innerHTML = result
  return li
}

function toLocalDateTime(date) {
  const regdate = new Date(date)
  return `${regdate.getFullYear()}. 
          ${(regdate.getMonth() + 1).toString().padStart(2, '0')}. 
          ${regdate.getDate().toString().padStart(2, '0')}. 
          ${regdate.getHours().toString().padStart(2, '0')}:
          ${regdate.getMinutes().toString().padStart(2, '0')}`
}

async function clickWriteBtn(event) {
  event.preventDefault()
  const commenter = document.querySelector("#commenter").textContent
  const content = $("#comment_content").val()
  const regdate = new Date()
  const postId = validateParam()

  const comment = new Comment(commenter, content, regdate, postId)
  const posts = new Posts(await createPosts())
  posts.addComment(postId, comment)
  location.href = "/cafe/resources/board/detail.html?id=" + postId
}


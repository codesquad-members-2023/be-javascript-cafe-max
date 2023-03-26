import {posts, comments} from "./common.js";
import {checkLogin} from "./header.js";
import {members} from "./common.js";
import {Comment} from "./comment.js";

window.onload = async function () {
  checkLogin()

  const id = validateParam()
  const post = posts.findById(id)
  await outputPost(post)
  await outputComment(id)
  await outputPostBtn(post)
  await outputCommentCount(comments.size())

  // 로그인여부에 따른 댓글작성버튼 활성화/비활성화 처리
  const loginMember = members.findByEmail(localStorage.getItem("loginMember"))
  console.log(loginMember)
  if (loginMember === undefined) {
    $("#writeBtn").attr('disabled', true);
  } else {
    // 댓글작성 버튼 클릭시 닉네임, 내용, 작성일자를 입력으로 받아 댓글을 작성합니다.
    $("#writeBtn").click(clickWriteBtn)
  }

  // 삭제 버튼 이벤트 등록
  const comment_delBtn = $(".comment_delBtn")
  comment_delBtn.each((idx, item) => {
    const postId = $(item).data("postid")
    const commentId = $(item).data("commentid")
    $(item).click(() => clickDeleteBtn(postId, commentId))
  })

  // 이전글/다음글 이벤트 등록
  $("#prevPostBtn").click(() => clickPostBtn(parseInt(post.id) - 1))
  $("#nextPostBtn").click(() => clickPostBtn(parseInt(post.id) + 1))

}

function validateParam() {
  const params = new URLSearchParams(location.search)
  const id = params.get("id")
  if (id == null) {
    location.href = "/index.html"
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
        await buildComments(commentsByPostId))
  }

  // 댓글작성 작성자 아이디 출력
  const loginMember = members.findByEmail(localStorage.getItem("loginMember"))
  if (loginMember !== undefined) {
    $("#commenter").text(loginMember.nickname)
  } else {
    $("#commenter").text("로그인 해주세요")
  }

}

async function outputPostBtn(post) {
  const prevPost = posts.findById(parseInt(post.id) - 1)
  const nextPost = posts.findById(parseInt(post.id) + 1)
  const postMoveBtnContainer = $("#postMoveBtnContainer")[0]

  if (prevPost !== undefined) {
    postMoveBtnContainer.innerHTML += `<button class="btn btn-primary" id="prevPostBtn">이전 글: <span id="prev_post_title">${prevPost.title}</span></button>`
  }
  if (nextPost !== undefined) {
    postMoveBtnContainer.innerHTML += `<button class="btn btn-primary" id="nextPostBtn">다음 글: <span id="next_post_title">${nextPost.title}</span></button>`
  }
}

async function outputCommentCount(count) {
  $("#comment_count").text(count)
}

async function buildComments(comments) {
  const ul = document.createElement("ul")
  for (const item of comments) {
    ul.appendChild(await buildComment(item))
  }
  return ul
}

async function buildComment(comment) {
  const li = document.createElement("li")
  const loginMember = await members.findByEmail(
      localStorage.getItem("loginMember"))
  const loginNickname = loginMember !== undefined ? loginMember.nickname
      : undefined
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
            <div aria-label="댓글 삭제 버튼영역" class="d-flex justify-content-end ${comment.commenter
  !== loginNickname ? 'hidden' : ''}">
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
  location.href = "/resources/board/detail.html?id=" + postId
}

function clickDeleteBtn(postId, id) {
  comments.remove(id)
  location.href = "/resources/board/detail.html?id=" + postId
}

function clickPostBtn(postId) {
  location.href = "/resources/board/detail.html?id=" + postId
}


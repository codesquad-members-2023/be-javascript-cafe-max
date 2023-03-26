import {Page} from "./page.js"
import {buildBoard} from "./board.js";
import {buildPage, parsingCurrentPage} from "./page.js";
import {checkLogin} from "./header.js";
import {posts} from "./common.js";

window.onload = async function () {
  console.log(posts)
  const currentPage = await parsingCurrentPage()
  const page = new Page(currentPage, 5, 10, posts.length())

  // 로그인 영역 출력
  checkLogin()

  // 게시글 출력
  $("#board tbody").replaceWith(buildBoard(posts, page))

  // 페이지 버튼 출력
  buildPage(posts, page)

  // 전체 글 개수 출력
  const countOfPost = document.querySelector("#countOfPost")
  countOfPost.textContent = posts.length()

  // 검색 버튼 이벤트 등록
  document.querySelector("#searchBtn").addEventListener("click", function () {
    const content = $("#search_content").val()
    location.href = "/cafe/resources/index.html?content=" + content
  })
}

function filterPostByTitle(datas) {
  let params = new URLSearchParams(location.search);
  const content = params.get("content")
  if (content != null) {
    return datas.filter((item) => item.title.includes(content))
  }
  return datas
}


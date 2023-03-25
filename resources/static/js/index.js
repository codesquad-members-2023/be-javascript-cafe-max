import {Page} from "./page.js"
import {buildBoard} from "./board.js";
import {buildPage, parsingCurrentPage} from "./page.js";
import {checkLogin} from "./header.js";
import {Posts, createPosts} from "./posts.js";

window.onload = async function () {
  const datas = await createPosts()
  const posts = new Posts(datas)
  const currentPage = await parsingCurrentPage()
  const page = new Page(currentPage, 5, 10, posts.length())

  // 로그인 여부에 따른 헤더 출력
  checkLogin()

  // 게시글 출력
  const tbody = document.querySelector("#board_table tbody")
  tbody.replaceWith(buildBoard(posts, page))

  // 페이지 버튼 출력
  buildPage(posts, page)

  // 전체 글 개수 출력
  const countOfPost = document.querySelector("#countOfPost")
  countOfPost.textContent = posts.length()

}


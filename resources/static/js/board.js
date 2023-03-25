/**
 * json 형식의 데이터를 입력받아 현재 페이지에 따른 게시글 페이지 태그를 생성하여 반환합니다.
 * @param posts json 형식의 게시글 데이터들
 * @param page Page 객체
 * @returns {HTMLTableSectionElement} 게시글 정보가 담긴 tbody 태그
 */
function buildBoard(posts, page) {
  const startIndex = page.getStartIndex()
  const endIndex = page.getEndIndex()
  const postData = posts.slice(startIndex, endIndex)

  const tbody = document.createElement("tbody")
  postData.forEach(item => {
    tbody.appendChild(buildBoardPost(item))
  })
  return tbody
}

/**
 * json 데이터를 기반으로 게시글 태그를 한개 만들어 반환합니다.
 * @returns {HTMLTableRowElement} : <tr> 태그로 구성된 게시글
 * @param post 게시글 데이터
 */
function buildBoardPost(post) {
  const row = document.createElement("tr")
  row.innerHTML = `
    <td class="board_table_title">${post.title}</td>
    <td>${post.author}</td>
    <td>${toLocalDate(post.date)}</td>
    <td>${post.views}</td>
    `
  return row
}

function toLocalDate(date) {
  return new Date(date).toLocaleDateString()
}

export {buildBoard}

class Page {
  constructor(pageCount, dataLimit) {
    this.currentPage = 1; // 현재 페이지 번호
    // 한 화면에 나타날 페이지 버튼의 개수
    this.dataLimit = dataLimit;
    this.pageCount = pageCount; // 한 페이지에 보여줄 데이터 개수
  }

  getCurrentPage() {
    return this.currentPage
  }

  /**
   * 현재 페이지에 따른 시작 인덱스 계산
   * ex, 120개의 게시글이 있고 현재 3페이지, 한 페이지에 10개씩 보여준다고 가정하면
   * 3번째 페이지에서는 20번째 인덱스 ~ 29번째 인덱스의 데이터를 가져와야합니다.
   * @returns {number} 게시글 참조 시작 인덱스
   */
  getStartIndex() {
    return (this.currentPage - 1) * this.dataLimit
  }

  /**
   * 현재 페이지에 따른 종료 인덱스 계싼
   * ex, 120개의 게시글이 있고 현재 3페이지, 한 페이지에 10개씩 보여준다고 가정하면
   * 3번째 페이지에서는 20번째 인덱스 ~ 29번째 인덱스의 데이터를 가져와야합니다.
   * @returns {number} 게시글 참조 종료 인덱스
   */
  getEndIndex() {
    return this.getStartIndex() + this.dataLimit
  }

  /**
   * 전체 페이지 개수 계산
   * ex, count = 63, dataLimit = 10, Math.ceil(63 / 10) = 7
   * @param count 전체 데이터 개수
   * @returns {number} 전체 페이지
   */
  getTotalPage(count) {
    return Math.ceil(count / this.dataLimit)
  }

  /**
   * 현재 페이지의 그룹 계산하기
   * 현재 페이지의 그룹을 알아야 현재 페이지 그룹 상의 첫번째 숫자와 마지막 숫자를 구할 수 있습니다.
   * ex, currentPage=3, pageCount=5, Math.ceil(3/5) = 1, 3페이지는 1그룹에 속해있습니다.
   * 1그룹 : 1 2 3 4 5
   * 2그룹 : 5 6 7 8 9
   * 3그룹 : 10 11 12
   * @returns {number} 현재 페이지가 속한 그룹번호
   */
  getPageGroup() {
    return Math.ceil(this.currentPage / this.pageCount)
  }

  /**
   * 현재 페이지 번호가 속한 그룹의 마지막 번호를 계산합니다.
   * ex, 현재 페이지 번호 = 1페이지, 1페이지가 속한 그룹은 1 그룹입니다.
   * 1그룹에 속한 마지막 번호는 5가 됩니다.
   * @param count 전체 게시글 개수
   * @returns {number} 페이지 그룹의 마지막 번호
   */
  getLastNumber(count) {
    let totalPage = this.getTotalPage(count)
    let lastNumber = this.getPageGroup() * this.pageCount
    if (lastNumber > totalPage) {
      lastNumber = totalPage
    }
    return lastNumber;
  }

  /**
   * 현재 페이지 번호가 속한 그룹의 첫번째 번호를 계산합니다.
   * ex, 현재 페이지 번호 = 3페이지, 3페이지가 속한 그룹은 1 그룹입니다.
   * 1그룹에 속한 첫번째 번호는 1이 됩니다.
   * @param count 전체 게시글 개수
   * @returns {number} 페이지 그룹의 첫번째 번호
   */
  getFirstNumber(count) {
    return this.getLastNumber(count) - (this.pageCount - 1)
  }

  setCurrentPage(pageNumber) {
    this.currentPage = pageNumber
  }
}

let posts;

window.onload = function () {
  posts = generate_post()
  const page = new Page(5, 10)
  document.querySelector("#board_table tbody")
  .replaceWith(buildBoard(posts, page))

  buildPage(posts, page)
}

/**
 * json 형식의 데이터를 입력받아 현재 페이지에 따른 게시글 페이지 태그를 생성하여 반환합니다.
 * @param posts json 형식의 게시글 데이터들
 * @param page Page 객체
 * @returns {HTMLTableSectionElement} 게시글 정보가 담긴 tbody 태그
 */
function buildBoard(posts, page) {
  const startIndex = page.getStartIndex()
  const endIndex = page.getEndIndex()
  const pageData = posts.slice(startIndex, endIndex)

  const tbody = document.createElement("tbody")
  pageData.forEach(item => {
    tbody.appendChild(createPost(item))
  })
  return tbody
}

/**
 * json 데이터를 기반으로 게시글 태그를 한개 만들어 반환합니다.
 * @param postData : json 형식의 게시글 한 데이터
 * @returns {HTMLTableRowElement} : <tr> 태그로 구성된 게시글
 */
function createPost(postData) {
  const row = document.createElement("tr")
  const post = JSON.parse(String(postData))
  row.innerHTML = `
    <td class="board_table_title">${post.title}</td>
    <td>${post.author}</td>
    <td>${post.date}</td>
    <td>${post.views}</td>
    `
  return row
}

/**
 * 현재 페이지에 따른 페이지 버튼들을 생성합니다.
 * @param posts json 형식의 게시글 데이터들
 * @param currentPage 현재 페이지
 */
function buildPage(posts, page) {
  // 첫번째 그룹 기준 1(firstNumber)~5(lastNumber)만큼 페이지네이션을 그려줍니다.
  // ex, < 1 2 3 4 5 >
  renderPageItems(posts, page)
}

function renderPageItems(posts, page) {
  const totalPage = page.getTotalPage(posts.length)
  const firstNumber = page.getFirstNumber(posts.length)
  const lastNumber = page.getLastNumber(posts.length)
  const prev = firstNumber - 1
  const next = lastNumber + 1
  let pagination = document.querySelector("#board_pagination")
  pagination.innerHTML = createPageButtons(page, firstNumber, lastNumber)

  // 페이지 번호 버튼에 이벤트 등록
  let buttons = $(".page_num_link").get()
  buttons.forEach(button => button.addEventListener('click',
      createPageButtonEvent(page, button.textContent)))

  // 페이지 이전 버튼에 이벤트 등록
  let prevButton = document.getElementById("page_prev_link")
  if (prev > 0) {
    prevButton.addEventListener("click", createPageButtonEvent(page, prev))
  } else {
    prevButton.addEventListener("click", createPageButtonEvent(page, 1))
  }

  // 페이지 이후 버튼에 이벤트 등록
  let nextButton = document.getElementById("page_next_link")
  if (next <= totalPage) {
    nextButton.addEventListener("click", createPageButtonEvent(page, next))
  } else {
    nextButton.addEventListener("click", createPageButtonEvent(page, totalPage))
  }
}

// 게시판의 페이지 버튼들을 생성합니다.
function createPageButtons(page, firstNumber, lastNumber) {
  let pageItems = ''

  // 이전 페이지 버튼 생성
  pageItems += `<li class="page-item"><button class="board_page_link" id="page_prev_link">〈</button></li>`

  // 페이지 버튼을 firstNumber번 ~ lastNumber번 생성
  for (let i = firstNumber; i <= lastNumber; i++) {
    pageItems +=
        `<li class="page-item">
          <button class="board_page_link page_num_link ${page.getCurrentPage()
        === i ? 'active' : ''}">${i}</button>
          </li>`
  }

  // 다음 페이지 버튼 생성
  pageItems += `<li class="page-item"><button class="board_page_link" id="page_next_link">〉</button></li>
`
  return pageItems
}

// 페이지 버튼에 대한 이벤트 생성
function createPageButtonEvent(page, pageNumber) {
  return function () {
    page.setCurrentPage(pageNumber)
    document.querySelector("#board_table tbody")
    .replaceWith(buildBoard(posts, page))
    buildPage(posts, page)
  }
}



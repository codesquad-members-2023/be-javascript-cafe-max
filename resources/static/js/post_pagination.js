class Page {
  constructor(currentPage, pageCount, dataLimit, totalCountOfData) {
    this.currentPage = currentPage; // 현재 페이지 번호
    this.pageCount = pageCount; // 한 화면에 나타날 페이지 버튼의 개수
    this.dataLimit = dataLimit; // 한 페이지에 보여줄 데이터 개수
    this.totalCountOfData = totalCountOfData // 전체 데이터 개수
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
   * @returns {number} 전체 페이지
   */
  getTotalPage() {
    return Math.ceil(this.totalCountOfData / this.dataLimit)
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
   * @returns {number} 페이지 그룹의 마지막 번호
   */
  getLastNumber() {
    let totalPage = this.getTotalPage()
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
   * @returns {number} 페이지 그룹의 첫번째 번호
   */
  getFirstNumber() {
    return ((this.getPageGroup() - 1) * this.pageCount) + 1
  }
}

window.onload = function () {
  const posts = generate_post()
  const currentPage = getCurrentPage()
  const page = new Page(currentPage, 5, 10, posts.length)
  // 게시글 출력
  document.querySelector("#board_table tbody")
  .replaceWith(buildBoard(posts, page))
  // 페이지 버튼 출력
  buildPage(posts, page)
  document.querySelector("#countOfPost").textContent = posts.length // 전체글 개수 설정
}

function getCurrentPage() {
  let params = new URLSearchParams(location.search);
  if (params.get("page") < 0) {
    return 1
  }
  return params.get("page")
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
 * @param posts json 형식이 게시글 데이터들
 * @param page 페이지 정보를 가진 객체
 */
function buildPage(posts, page) {
  const totalPage = page.getTotalPage()
  const firstNumber = page.getFirstNumber()
  const lastNumber = page.getLastNumber()
  const prev = firstNumber - 1
  const next = lastNumber + 1
  let pagination = document.querySelector("#board_pagination")
  pagination.innerHTML = createPageButtons(page)

  // 페이지 번호 버튼에 이벤트 등록
  let buttons = $(".page_num_link").get()
  buttons.forEach(button => button.addEventListener('click',
      createPageButtonEvent(posts, page, button.textContent)))

  // 페이지 이전 버튼에 이벤트 등록
  let prevButton = document.getElementById("page_prev_link")
  if (prev > 0) {
    prevButton.addEventListener("click",
        createPageButtonEvent(posts, page, prev))
  } else {
    prevButton.addEventListener("click", createPageButtonEvent(posts, page, 1))
  }

  // 페이지 이후 버튼에 이벤트 등록
  let nextButton = document.getElementById("page_next_link")
  if (next <= totalPage) {
    nextButton.addEventListener("click",
        createPageButtonEvent(posts, page, next))
  } else {
    nextButton.addEventListener("click",
        createPageButtonEvent(posts, page, totalPage))
  }
}

/**
 * 페이지 버튼 태그들을 생성하여 반환합니다.
 * @param page 페이지 객체
 * @returns {string} 페이지 버튼들로 구성된 태그
 */
function createPageButtons(page) {
  const firstNumber = page.getFirstNumber()
  const lastNumber = page.getLastNumber()
  let pageItems = ''

  // 이전 페이지 버튼 생성
  pageItems += `<li class="page-item"><button class="board_page_link" id="page_prev_link">〈</button></li>`

  // 페이지 버튼을 firstNumber번 ~ lastNumber번 생성
  console.log(firstNumber + ", " + lastNumber)
  for (let i = firstNumber; i <= lastNumber; i++) {
    pageItems +=
        `<li class="page-item">
          <button class="board_page_link page_num_link ${parseInt(
            page.getCurrentPage()) === i ? 'active' : ''}">${i}</button>
          </li>`
  }

  // 다음 페이지 버튼 생성
  pageItems += `<li class="page-item"><button class="board_page_link" id="page_next_link">〉</button></li>
`
  return pageItems
}

/**
 * 게시글과 페이지 버튼을 렌더링하는 함수를 생성하여 반환합니다.
 * @param posts json 형식의 게시글 데이터들
 * @param page 페이지 객체
 * @param pageNumber 페이지 번호
 * @returns {(function(): void)|*} 게시글과 페이지버튼을 렌더링하는 함수
 */
function createPageButtonEvent(posts, page, pageNumber) {
  return function () {
    const pathOfURI = window.location.pathname
    location.href = pathOfURI + "?page=" + pageNumber
  }
}



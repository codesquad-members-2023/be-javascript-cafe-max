let currentPage = 1
const pageCount = 5 // 한 화면에 나타날 페이지 버튼의 개수
const dataLimit = 10 // 한 페이지에 보여줄 데이터 개수

function renderData(datas, page) {
  const startIndex = (page - 1) * dataLimit
  const endIndex = startIndex + dataLimit
  const pageData = datas.slice(startIndex, endIndex)

  const tableBody = document.getElementById("board_table_tbody")
  tableBody.innerHTML = ''
  pageData.forEach(item => {
    tableBody.appendChild(createPostRow(item))
  })
}

function createPostRow(item) {
  const row = document.createElement("tr")
  item = JSON.parse(item)
  // 백틱(\`\`)을 사용하여 여러줄의 문자열을 간편하게 작성할 수 있음
  row.innerHTML = `
    <td class="board_table_title">${item.title}</td>
    <td>${item.author}</td>
    <td>${item.date}</td>
    <td>${item.views}</td>
    `
  return row
}

function renderPagination(datas, currentPage) {
  // 전체 페이지 개수
  // ex, datas.length = 63, pageSize = 10, Math.ceil(datas.length / pageSize) = 7
  const totalPage = Math.ceil(datas.length / dataLimit)

  // 현재 페이지의 그룹 계산하기
  // 현재 페이지의 그룹을 알아야 현재 페이지 그룹 상의 첫번째 숫자와 마지막 숫자를 구할 수 있습니다.
  // ex, currentPage=3, pageCount=5, Math.ceil(3/5) = 1, 3페이지는 1그룹에 속해있습니다.
  const pageGroup = Math.ceil(currentPage / pageCount)

  // 현재 페이지 그룹의 첫번째 숫자, 마지막 숫자 계산하기
  let lastNumber = pageGroup * pageCount
  if (lastNumber > totalPage) {
    lastNumber = totalPage
  }
  let firstNumber = lastNumber - (pageCount - 1)
  // 첫번째 그룹 기준 1(firstNumber)~5(lastNumber)만큼 페이지네이션을 그려줍니다.
  renderPageItems(datas, firstNumber, lastNumber)
}

function renderPageItems(datas, firstNumber, lastNumber) {
  const totalPage = Math.ceil(datas.length / dataLimit)
  const prev = firstNumber - 1
  const next = lastNumber + 1
  let pagination = document.getElementById("board_pagination")
  pagination.innerHTML = createPageButtons(firstNumber, lastNumber)

  // 페이지 번호 버튼에 이벤트 등록
  let buttons = $(".page_num_link").get()
  buttons.forEach(item => item.addEventListener('click',
      createPageButtonEvent(item.textContent)))

  // 페이지 이전 버튼에 이벤트 등록
  let prevButton = $("#page_prev_link")[0]
  if (prev > 0) {
    prevButton.addEventListener("click", createPageButtonEvent(prev))
  } else {
    prevButton.addEventListener("click", createPageButtonEvent(1))
  }

  // 페이지 이후 버튼에 이벤트 등록
  let nextButton = $("#page_next_link")[0]
  if (next <= totalPage) {
    nextButton.addEventListener("click", createPageButtonEvent(next))
  } else {
    nextButton.addEventListener("click", createPageButtonEvent(totalPage))
  }
}

// 게시판의 페이지 버튼들을 생성합니다.
function createPageButtons(firstNumber, lastNumber) {
  let pageItems = ''

  // 이전 페이지 버튼 생성
  pageItems += `<li class="page-item"><button class="board_page_link" id="page_prev_link">〈</button></li>`

  // 페이지 버튼을 firstNumber번 ~ lastNumber번 생성
  for (let i = firstNumber; i <= lastNumber; i++) {
    pageItems += `<li class="page-item"><button class="board_page_link page_num_link ${parseInt(
        currentPage) === i ? 'active' : ''}">${i}</button></li>`
  }

// 다음 페이지 버튼 생성
  pageItems += `<li class="page-item"><button class="board_page_link" id="page_next_link">〉</button></li>
`
  return pageItems
}

// 페이지 버튼에 대한 이벤트 생성
function createPageButtonEvent(pageNumber) {
  return function () {
    currentPage = pageNumber
    renderData(datas, pageNumber)
    renderPagination(datas, currentPage)
  }
}

const datas = generate_post()
renderData(datas, 1)
renderPagination(datas, 1)

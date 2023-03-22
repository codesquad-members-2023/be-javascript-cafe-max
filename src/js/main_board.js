let boardData;
let postNumberPerPage = 15; // 한 페이지에 보여줄 게시글 수
let firstPostIdxInCurrentPage; // 현재 페이지의 첫 번째 글 번호
let pagingBarSize = 5; // 페이징 바에 보여줄 페이지 수
let firstPage = 1; // 1 페이지
let lastPage; // 마지막 페이지
let currentPage;
let totalPostsNumber; // 총 개시글 수
let beginPageInPagingBar; // 현재 페이징 바의 첫 번째 페이지
let endPageInPagingBar; // 현재 페이징 바의 마지막 페이지
let hasPreviousBlock; // 페이징 바에서 이전 블록이 존재하는가?
let hasNextBlock; // 페이징 바에서 다음 블록이 존재하는가?

window.onload = function () {
    initialBoardConfiguration();
    buildPagingBar();
    buildBoard();
}

/**
 * JSON 형태의 게시글 더미 데이터를 JavaScript 객체로 반환
 * @returns 게시글 더미 데이터 JavaScript 객체
 */
function loadBoardDataJson() {
    return JSON.parse(JSON.stringify(dummyBoardData));
}

/**
 * URL의 queryString에서 현재 페이지 번호를 구한다
 * 현재 페이지 번호를 구할수 없으면 1을 반환한다
 * @returns 현재 페이지 번호
 */
function getCurrentPage() {
    let params = new URLSearchParams(location.search);
    return getValidatedCurrentPage(params.get("page"));
}

/**
 * 페이지 번호를 검증후 다시 반환한다. 만약 잘못된 입력이 들어오면 사용할 수 있는 페이지 번호로 변환하여 반환해 준다
 * - 입력값이 숫자가 아니거나 1보다 작을 경우 1 반환
 * - 입력값이 마지막 페이지보다 클 경우 마지막 페이지 반환
 * - 검증에 통과하면 입력값 그대로 반환
 * @param {*} pageParam 검증할 페이지 번호
 * @returns 검증이 완료된 페이지 번호
 */
function getValidatedCurrentPage(pageParam) {
    if (isNaN(pageParam) || pageParam < 1) pageParam = 1;
    if (pageParam > lastPage) pageParam = lastPage;
    return pageParam;
}

/**
 * 게시판 목록 페이지에 필요한 값들을 초기화 준다
 */
function initialBoardConfiguration() {
    boardData = loadBoardDataJson();
    totalPostsNumber = boardData.length;
    lastPage = Math.floor((totalPostsNumber - 1) / postNumberPerPage) + 1;
    currentPage = getCurrentPage();
    firstPostIdxInCurrentPage = (totalPostsNumber - (currentPage - 1) * postNumberPerPage);
    beginPageInPagingBar = (Math.floor((currentPage - 1) / pagingBarSize) * pagingBarSize) + 1;
    endPageInPagingBar = beginPageInPagingBar + pagingBarSize - 1;
    if (endPageInPagingBar > lastPage) endPageInPagingBar = lastPage;
    hasPreviousBlock = currentPage > pagingBarSize;
    hasNextBlock = currentPage <= lastPage - pagingBarSize + 1;
}

/**
 * 웹 페이지의 게시글 table에 게시글을 추가해 준다
 */
function buildBoard() {
    const table = document.getElementById('crudBoard').getElementsByTagName("tbody")[0];


    for (var i = firstPostIdxInCurrentPage - postNumberPerPage; i < firstPostIdxInCurrentPage; i++) {
        if(i < 0) continue;

        const tableRow = table.insertRow(0);
        const numCell = tableRow.insertCell(0);
        const titleCell = tableRow.insertCell(1);
        const writerCell = tableRow.insertCell(2);
        const regDateCell = tableRow.insertCell(3);
        const hitCell = tableRow.insertCell(4);

        numCell.innerText = boardData[i].idx;
        titleCell.innerText = boardData[i].title;
        writerCell.innerText = boardData[i].writer;
        regDateCell.innerText = boardData[i].reg_date;
        hitCell.innerText = boardData[i].hit;
    }
}

/**
 * 웹 페이지에 페이징바를 추가해 준다
 */
function buildPagingBar() {
    const buttonGroup = document.getElementById("pagingBtnGroup");
    const pathnameOfURL = window.location.pathname

    // first page(= 1 페이지)로 이동 버튼
    if (currentPage > firstPage) {
        let button = document.createElement("button");
        button.type = "button";
        button.innerHTML = '<i class="fa-solid fa-backward"></i>';
        button.onclick = function () {
            location.href = pathnameOfURL + "?page=" + firstPage;
        };
        buttonGroup.appendChild(button);
    }

    // 이전 블록으로 이동 버튼
    if(hasPreviousBlock) {
        let button = document.createElement("button");
        button.type = "button";
        button.innerHTML = '<i class="fa-solid fa-play fa-flip-horizontal"></i>';
        button.onclick = function () {
            location.href = pathnameOfURL + "?page=" + (currentPage - pagingBarSize);
        };
        buttonGroup.appendChild(button);
    }

    // 페이징 바
    for(var i = beginPageInPagingBar; i <= endPageInPagingBar; i++) {
        let button = document.createElement("button");
        let page = i;
        button.type = "button";
        button.innerHTML = i;
        if(currentPage == page) button.className = "checked";
        button.onclick = function () {
            location.href = pathnameOfURL + "?page=" + page;
        };
        buttonGroup.appendChild(button);
    }

    // 다음 블록으로 이동 버튼
    if(hasNextBlock) {
        let button = document.createElement("button");
        button.type = "button";
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
        button.onclick = function () {
            location.href = pathnameOfURL + "?page=" + getValidatedCurrentPage(Number(currentPage) + pagingBarSize);
        };
        buttonGroup.appendChild(button);
    }

    // last page(마지막 페이지)로 이동 버튼
    if(currentPage < lastPage) {
        let button = document.createElement("button");
        button.type = "button";
        button.innerHTML = '<i class="fa-solid fa-backward fa-flip-horizontal"></i>';
        button.onclick = function () {
            // 현재 URL에 page=lastPage 붙여서 보내기
            location.href = pathnameOfURL + "?page=" + lastPage;
        };
        buttonGroup.appendChild(button);
    }


}
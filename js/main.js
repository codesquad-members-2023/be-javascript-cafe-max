function initData() {
    fetch("../json/posts.json")
    .then((file) => {
        return file.json()})
    .then((json) => {
        const urlParams = new URL(location.href).searchParams;
        const pageNationNumber = urlParams.get('pageNation') === null ? 1 : Number(urlParams.get('pageNation'));
        initPageNation(pageNationNumber, json.length);
        addPostsHtml(pageNationNumber, json);
    });
}

function initPageNation(pageNationNumber, postsLength) {
    const pageNation = document.querySelector('ul[class="pagination"]');
    const maxPageNumber = parseInt(postsLength / 10) + (postsLength % 10 === 0 ? 0 : 1);
    pageNation.innerHTML += addPrevious(pageNationNumber);
    pageNation.innerHTML += addPage(pageNationNumber, maxPageNumber);
    pageNation.innerHTML += addNext(pageNationNumber, maxPageNumber);
}

function addPrevious(pageNationNumber) {
    const pageDisabled = pageNationNumber < 2 ? 'disabled' : '';
    return `<li class="page-item ${pageDisabled}">
               <a class="page-link" href="../html/main.html?pageNation=${pageNationNumber - 1}" aria-label="Previous">
                   <span aria-hidden="true">&laquo;</span>
               </a>
            </li>`;
}

function addPage(pageNationNumber, maxPageNumber) {
    let pages = '';
    for (let i = 1; i <= maxPageNumber; i++) {
        const pageActive = pageNationNumber === i ? 'active' : '';
        pages += `<li class="page-item ${pageActive}">
                    <a class="page-link" href="../html/main.html?pageNation=${i}">${i}</a>
                  </li>`
    }

    return pages;
}

function addNext(pageNationNumber, maxPageNumber) {
    console.log(maxPageNumber);
    console.log(pageNationNumber);
    const pageDisabled = pageNationNumber === maxPageNumber ? 'disabled' : '';
    return `<li class="page-item ${pageDisabled}">
               <a class="page-link" href="../html/main.html?pageNation=${pageNationNumber + 1}" aria-label="Next">
                   <span aria-hidden="true">&raquo;</span>
               </a>
            </li>`;
}

function addPostsHtml(pageNationNumber, posts) {
    document.querySelector('#postsCount').innerText = `전체 글 ${posts.length}개`;
    const tbody = document.querySelector('tbody');
    const pageFirst = (pageNationNumber - 1) * 10;
    const pageLast = pageNationNumber * 10 < posts.length ? pageNationNumber * 10 : posts.length;

    // 10 20 30 31
    for (let i = pageFirst; i < pageLast; i++) {
        tbody.innerHTML += `<tr>
                                <td class="title">${posts[i].title}</td>
                                <td class="writer">${posts[i].writer}</td>
                                <td class="writeDate">${posts[i].writeDate}</td>
                                <td class="views">${posts[i].views}</td>
                            </tr>`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    initData();
});

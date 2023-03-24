function initialization() {
    const members = JSON.parse(localStorage.getItem('members'));
    const urlParams = new URL(location.href).searchParams;
    const pageNationNumber = urlParams.get('pageNation') === null ? 1 : Number(urlParams.get('pageNation'));
    addPageNation(pageNationNumber, members.length);
    addMembers(pageNationNumber, members);
}

function addPageNation(pageNationNumber, membersLength) {
    const pageNation = document.querySelector('ul[class="pagination"]');
    const maxPageNumber = parseInt(membersLength / 10) + (membersLength % 10 === 0 ? 0 : 1);
    pageNation.innerHTML += addPagePrevious(pageNationNumber);
    pageNation.innerHTML += addPage(pageNationNumber, maxPageNumber);
    pageNation.innerHTML += addPageNext(pageNationNumber, maxPageNumber);
}

function addPagePrevious(pageNationNumber) {
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
                    <a class="page-link" href="../html/memberList.html?pageNation=${i}">${i}</a>
                  </li>`
    }

    return pages;
}

function addPageNext(pageNationNumber, maxPageNumber) {
    const pageDisabled = pageNationNumber === maxPageNumber ? 'disabled' : '';
    return `<li class="page-item ${pageDisabled}">
               <a class="page-link" href="../html/main.html?pageNation=${pageNationNumber + 1}" aria-label="Next">
                   <span aria-hidden="true">&raquo;</span>
               </a>
            </li>`;
}

function addMembers(pageNationNumber, members) {
    document.querySelector('#membersCount').innerText = `전체 글 ${members.length}개`;
    const tbody = document.querySelector('tbody');
    const pageFirst = (pageNationNumber - 1) * 10;
    const pageLast = pageNationNumber * 10 < members.length ? pageNationNumber * 10 : members.length;

    for (let i = pageFirst; i < pageLast; i++) {
        tbody.innerHTML += `<tr>
                                <td class="nickName">${members[i].nickName}</td>
                                <td class="email">${members[i].email}</td>
                                <td class="signUpDate">${members[i].signUpDate}</td>
                            </tr>`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    initialization();
});

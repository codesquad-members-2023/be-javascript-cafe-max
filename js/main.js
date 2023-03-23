async function initialization() {
    let posts = localStorage.getItem('posts');

    if (posts === null) {
        let posts = JSON.stringify(await getFilePosts());
        localStorage.setItem('posts', posts);
    }

    posts = JSON.parse(localStorage.getItem('posts'));
    const urlParams = new URL(location.href).searchParams;
    const pageNationNumber = urlParams.get('pageNation') === null ? 1 : Number(urlParams.get('pageNation'));
    addPageNation(pageNationNumber, posts.length);
    addPosts(pageNationNumber, posts);
}

async function getFilePosts() {
    let result = await fetch("../json/posts.json");
    return result.json();
}
function addPageNation(pageNationNumber, postsLength) {
    const pageNation = document.querySelector('ul[class="pagination"]');
    const maxPageNumber = parseInt(postsLength / 10) + (postsLength % 10 === 0 ? 0 : 1);
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
                    <a class="page-link" href="../html/main.html?pageNation=${i}">${i}</a>
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

function addPosts(pageNationNumber, posts) {
    document.querySelector('#postsCount').innerText = `전체 글 ${posts.length}개`;
    const tbody = document.querySelector('tbody');
    const pageFirst = (pageNationNumber - 1) * 10;
    const pageLast = pageNationNumber * 10 < posts.length ? pageNationNumber * 10 : posts.length;

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
    initialization();
});

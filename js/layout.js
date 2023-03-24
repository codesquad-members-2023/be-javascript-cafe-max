function includeHeader() {
     fetch("../html/header.html")
    .then(file => file.text())
    .then(html => {
        document.querySelector('header').innerHTML = html;
        changeEndHeader();
    });
}

function changeEndHeader() {
    const loginMember = localStorage.getItem('loginMember');
    let html = '<a href="../html/signIn.html" class="btn btn-primary btn-sm">로그인/회원가입</a>';
    const endHeader = document.querySelector('#endHeader');

    if (loginMember != null) {
        html = `<a href="../html/memberList.html" class="btn">멤버 리스트</a>
                <a href="#" class="btn btn-primary btn-sm ms-3">마이페이지</a>
                <a href="../html/main.html" id='logout' class="btn btn-primary btn-sm ms-3">로그아웃</a>`;
    }

    endHeader.innerHTML = html;
    endHeader.addEventListener('click', (e) => {
        if(e.target && e.target.id === 'logout') {
            localStorage.removeItem('loginMember');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    includeHeader();
});

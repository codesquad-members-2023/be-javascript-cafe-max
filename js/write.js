function validationTitle() {
    const title = document.querySelector('#title');
    const validateText = document.querySelector('#validationTitleFeedback');

    if (title.value.length > 0) {
        title.className = 'form-control is-valid';
        return false;
    }

    validateText.textContent = '최소 1글자 이상이어야 합니다.';
    title.className = 'form-control is-invalid';
    return true;
}

function validateContent() {
    const content = document.querySelector('#content');
    const validateText = document.querySelector('#validationContentFeedback');

    if (2 < content.value.length && content.value.length <= 1000) {
        content.className = 'form-control is-valid';
        return false;
    }

    validateText.textContent = '최소 3글자에서 최대 1000글자입니다.';
    content.className = 'form-control is-invalid';
    return true;
}

function validateWriter() {
    const member = JSON.parse(localStorage.getItem('loginMember'));
    const content = document.querySelector('#content');
    const validateText = document.querySelector('#validationContentFeedback');

    if (member !== null) {
        return false;
    }

    validateText.textContent = '로그인을 하셔야 합니다.';
    content.className = 'form-control is-invalid';
    return true;
}

function write(event) {
    const isValidateTitle = validationTitle();
    const isValidateContent = validateContent();
    const isValidateWriter = validateWriter();

    if (isValidateTitle || isValidateContent || isValidateWriter) {
        event.preventDefault();
        event.stopPropagation();
        return;
    }

    addPost();
}

function addPost() {
    const post = {
        title: document.querySelector('#title').value,
        content: document.querySelector('#content').value,
        writer: JSON.parse(localStorage.getItem('loginMember')).nickName,
        writeDate: getDateNow(),
        views: 0
    };

    let posts = JSON.parse(localStorage.getItem('posts'));

    if (posts === null) {
        let arr = [post];
        localStorage.setItem('posts', JSON.stringify(arr));
        return;
    }

    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getDateNow() {
    const now = new Date();
    const month = (now.getMonth()+1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${now.getFullYear()}.${month}.${day}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').addEventListener('submit', write);
});

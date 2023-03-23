var quill = new Quill('#quillEditor', {
    modules: {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline'],
            ['link', 'blockquote', 'code-block', 'image']
        ]
    },
    placeholder: '여기에 게시글을 작성하세요!',
    theme: 'snow'
});

/**
 * 에디터의 글자수 제한 표시
 */
const minContentLength = 3;
const maxContentLength = 1000;
const htmlTag = document.getElementById("maxLength");
quill.on('text-change', function (delta, old, source) {
    let textLength = quill.getLength() - 1;
    htmlTag.style.color = "green";
    htmlTag.innerHTML = "글자수: " + textLength + "/1000";
    if (textLength > maxContentLength) {
        htmlTag.style.color = "red";
    }
});

/**
 * 작성자 검증
 */
function validateWriter() {
    const writer = document.getElementsByName("writer")[0].value;
    if(writer.length <= 0) {
        alert("작성자를 입력해 주세요.")
        return false;
    }
    if(writer.length > 64) {
        alert("작성자는 64글자 이하입니다.");
    }
    return true;
}

/**
 * 제목 검증
 */
function validateTitle() {
    const title = document.getElementsByName("title")[0].value;
    if(title.length <= 0) {
        alert("제목을 입력해 주세요.")
        return false;
    }
    if(title.length > 100) {
        alert("제목은 100글자 이하로 입력해 주세요.")
        return false;
    }
    return true;
}

/**
 * 본문 검증
 */
function validateContent() {
    const contentLength = quill.getLength() - 1;
    if(contentLength < minContentLength || contentLength > maxContentLength) {
        alert("본문은 3글자 이상 1000자 이하로 작성해 주세요.")
        return false;
    }
    return true;
}

/**
 * 글 작성
 */
function writePost(e) {
    e.preventDefault();
    if(!validateWriter() || !validateTitle() || !validateContent()) {
        return;
    }

    const writeForm = document.getElementsByName("writeForm")[0];
	writeForm.method = "post";
	writeForm.action = "main_board.html";

    const content = document.getElementsByName("content")[0];
    const editor = document.getElementsByClassName("ql-editor")[0];
    content.value = editor.innerHTML;

    writeForm.submit();
}
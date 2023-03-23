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
const limit = 1000;
const htmlTag = document.getElementById("maxLength");
quill.on('text-change', function (delta, old, source) {
    let textLength = quill.getLength() - 1;
    htmlTag.style.color = "green";
    htmlTag.innerHTML = "글자수: " + textLength + "/1000";
    if (textLength > limit) {
        htmlTag.style.color = "red";
    }
});
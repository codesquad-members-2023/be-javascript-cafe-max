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

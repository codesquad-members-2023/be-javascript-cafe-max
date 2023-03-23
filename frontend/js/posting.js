function onPostingBtnClick() {
    const postingForm = document.getElementById('posting-form');
    postingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const feedback = document.getElementById('invalid-feedback');
        if (!validateContent()) {
            feedback.style.display = 'block';
        } else {
            feedback.style.display = 'none';
            postingForm.submit();
        }
    });
}

function validateContent() {
    const content = document.getElementById('content').value;
    return content.length >= 3 && content.length <= 1000;
}

onPostingBtnClick();
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

function write(event) {
    const isValidateTitle = validationTitle();
    const isValidateContent = validateContent();

    if (isValidateTitle || isValidateContent) {
        event.preventDefault();
        event.stopPropagation();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').addEventListener('submit', write);
});

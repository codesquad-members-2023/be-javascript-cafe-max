function showAlert() {
    const urlParams = new URL(location.href).searchParams;
    const isAuth = urlParams.get('auth');
    const alert = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>가입을 축하합니다!</strong> Hello Java에 오신걸 환영합니다. 🎉🎉🎉
                    <button type="button" class="btn-close" data-bs-dismiss="alert"
                        aria-label="Close"></button>
                    </div>`;

    if (isAuth) {
        const main = document.querySelector('main');
        main.innerHTML = alert + main.innerHTML;
    }
}

function validateIdAndPassword(event) {
    event.preventDefault();
    event.stopPropagation();
    const password = document.querySelector('#password');
    const validateText = document.querySelector('#validationPasswordFeedback');
    validateText.textContent = '아이디나 비밀번호가 틀립니다.';
    password.className = 'form-control is-invalid';
}

function signIn(event) {
    const members = JSON.parse(localStorage.getItem('members'));
    const inputEmail = document.querySelector('#email').value;
    const inputPassword = document.querySelector('#password').value;

    if (members === null) {
        validateIdAndPassword(event);
        return;
    }

    for (let member of members) {
        if (member.email === inputEmail && member.password === inputPassword) {
            const loginMember = {
                "email": member.email,
                "nickName": member.nickName
            };
            localStorage.setItem('loginMember', JSON.stringify(loginMember));
            return;
        }
    }

    validateIdAndPassword(event);
}

document.addEventListener("DOMContentLoaded", function () {
    showAlert();
    document.querySelector('form').addEventListener('submit', signIn);
});

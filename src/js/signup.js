
function signUp(e) {
    e.preventDefault();
    if(!validateSignInForm()) return;

    let userId = document.getElementsByName("user_id")[0].value;
    let userEmail = document.getElementsByName("user_email")[0].value;
    let url = "../html/signup_success.html?user_id="+userId+"&user_email="+userEmail;
    location.href = url;
}

/**
 * 회원 가입 form 전체 검증
 */
function validateSignInForm() {
    if(!validateUserId()) return false;
    if(!validateUserEmail()) return false;
    if(!validateUserPassword()) return false;
    if(!validateUserPasswordCheck()) return false;
    return true;
}

/**
 * 아이디 유효성 검사
 *  - 영문, 숫자 조합 2 ~ 64자
 * @returns 유효성 검사 통과 유무 boolean
 */
function validateUserId() {
    let userId = document.getElementsByName("user_id")[0].value;
    let userIdReg = /^[a-zA-z0-9]{4,12}$/;

    if(!userIdReg.test(userId)) {
        alert("아이디는 영문, 숫자 조합 2 ~ 64자를 입력해 주세요.");
        return false;
    }
    return true;
}

/**
 * 이메일 유효성 검사
 * @returns 유효성 검사 통과 유무 boolean
 */
function validateUserEmail() {
    let userEmail = document.getElementsByName("user_email")[0].value;
    let userEmailReg = /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if(!userEmailReg.test(userEmail)) {
        alert("올바른 이메일을 입력해 주세요.");
        return false;
    }
    return true;
}

/**
 * 비밀번호 유효성 검사
 *  - 영어 소문자, 숫자 조합 8 ~ 32자
 * @returns 유효성 검사 통과 유무 boolean
 */
function validateUserPassword() {
    let userPassword = document.getElementsByName("user_password")[0].value;
    let userPasswordReg = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,32}$/;

    if(!userPasswordReg.test(userPassword)) {
        alert("비밀번호는 영어 소문자, 숫자 조합 8 ~ 32자를 입력해 주세요.");
        return false;
    }
    return true;
}

/**
 * 비밀번호 확인 유효성 검사
 * @returns 유효성 검사 통과 유무 boolean
 */
function validateUserPasswordCheck() {
    let userPassword = document.getElementsByName("user_password")[0].value;
    let userPasswordCheck = document.getElementsByName("user_password_check")[0].value;

    if(!userPasswordCheck.length || !userPasswordCheck) {
        alert("비밀번호 확인란을 입력해 주세요.");
        return false;
    }
    if(userPassword != userPasswordCheck) {
        alert("비밀번호와 비밀번호 확인란이 일치하지 않습니다.");
        return false;
    }
    
    return true;
}
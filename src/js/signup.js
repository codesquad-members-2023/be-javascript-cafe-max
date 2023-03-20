
/**
 * 회원 가입 form 전체 검정
 */
function validateSignInForm(e) {
    e.preventDefault;
    validateUserId();
}

/**
 * 아이디 유효성 검사
 *  - 영문, 숫자 조합 2 ~ 64자
 */
function validateUserId() {
    var userId = document.getElementsByName("user_id")[0].value;
    console.log(userId);
    var userIdReg = /^[a-zA-z0-9]{4,12}$/;

    if(!userIdReg.test(userId)) {
        alert("아이디는 영문, 숫자 조합 2 ~ 64자를 입력해 주세요.");
        return false;
    }
    return true;
}

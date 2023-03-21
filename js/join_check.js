// 이메일 유효성 검사
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 닉네임 유효성 검사
function validateNickname(nickname) {
    var re = /^\w{2,64}$/;
    return re.test(nickname);
}

// 패스워드 유효성 검사
function validatePassword(password) {
    var re = /^(?=.*[a-z])(?=.*\d).{8,32}$/;
    return re.test(password);
}

// 버튼 요소 선택
var button = document.querySelector('.login-button');

// 버튼 클릭 이벤트 핸들러 함수
function handleClick() {
  var emailInput = document.querySelector('input[name="email"]');
  var nicknameInput = document.querySelector('input[name="nickname"]');
  var passwordInput = document.querySelector('input[name="password"]');

  var email = emailInput.value;
  var nickname = nicknameInput.value;
  var password = passwordInput.value;

  var isValidEmail = validateEmail(email);
  var isValidNickname = validateNickname(nickname);
  var isValidPassword = validatePassword(password);

  if (!isValidEmail) {
    alert('올바른 이메일 주소를 입력하세요.');
    emailInput.focus();
    return;
  }

  if (!isValidNickname) {
    alert('닉네임은 2~64자여야 합니다.');
    nicknameInput.focus();
    return;
  }

  if (!isValidPassword) {
    alert('비밀번호는 영문 소문자 및 숫자를 모두 포함한 8~32자여야 합니다.');
    passwordInput.focus();
    return;
  }

  alert('회원가입이 완료되었습니다.');
}

// 버튼 클릭 이벤트 리스너 등록
button.addEventListener('click', handleClick);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
const nickNameRegex = /^[A-Za-z0-9ㄱ-ㅎ가-힣]{2,64}/;
const passwordRegex = /(?=.*[a-z])(?=.*[0-9])[\S]{8,32}/;

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

function validateForm() {
  const email = document.getElementById("login-email").value;
  const nickName = document.getElementById("login-nickName").value;
  const password = document.getElementById("login-password").value;

  if (!emailRegex.test(email)) {
    alert("정확한 이메일을 입력하세요");
    return false;
  }

  if (!nickNameRegex.test(nickName)) {
    alert("닉네임의 글자수는 2~64 자리 이내 입니다.");
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "비밀번호는 8글자 이상 32글자 이하 이며 영어 소문자 및 숫자를 반드시 포함해야합니다."
    );
    return false;
  }

  return true;
}

import {members} from "./common.js";
import Member from "./member.js";

$(document).ready(function () {
  $("form").submit(signup)
});

function signup(event) {
  event.preventDefault()

  const email = $("#email").val();
  const nickname = $("#nickname").val();
  const pwd = $("#pwd").val();

  if (!validateSignUp(email, nickname, pwd)) {
    return false
  }

  members.add(new Member(email, nickname, pwd))
  alert("회원가입에 성공하였습니다.")
  localStorage.setItem("signup_success_email", email)
  location.href = "/be-javascript-cafe-max/resources/user/signup_success.html"
}

function validateSignUp(email, nickname, pwd) {
  if (!isEmail(email)) {
    alert("잘못된 이메일 형식입니다.");
    return false;
  }

  if (!isNickName(nickname)) {
    alert("한글 또는 대소문자로 시작하는 2~64 글자의 닉네임을 입력해주세요.");
    return false;
  }

  if (!isPassword(pwd)) {
    alert("소문자 및 숫자를 포함하는 8~32글자의 비밀번호를 입력해주세요");
    return false
  }

  if (isDuplicatedEmail(email)) {
    alert("이메일이 중복되었습니다.")
    return false
  }

  if (isDuplicatedNickname(nickname)) {
    alert("닉네임이 중복되었습니다.")
    return false
  }
  return true
}

// 이메일 형식을 지키는지 검사합니다.
function isEmail(value) {
  const regExp = /^[\da-zA-Z]([-_.]?[\da-zA-Z])*@[\da-zA-Z]([-_.]?[\da-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(value);
}

// 한글 또는 대소문자로 시작하고 2~64글자인지 검사합니다.
function isNickName(value) {
  const regExp = /^[a-zA-Zㄱ-힣]+[a-zA-Zㄱ-힣\d]{1,63}$/g;
  return regExp.test(value);
}

// 소문자 및 숫자를 포함하는 8~32글자인지 검사합니다.
function isPassword(value) {
  const regExp = /^(?=.*[a-zA-z])(?=.*\d).{8,32}$/;
  return regExp.test(value);
}

// 이메일이 중복되었는지 확인합니다.
function isDuplicatedEmail(email) {
  return members.findByEmail(email) !== undefined
}

// 닉네임이 중복되었는지 확인합니다.
function isDuplicatedNickname(nickname) {
  return members.findByNickname(nickname) !== undefined
}

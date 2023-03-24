$(document).ready(function () {
  $("#writeBtn").click(function (event) {
    event.preventDefault()

    if (checkWriteForm()) {
      document.write_form.submit()
    }

  });
})

function checkWriteForm() {
  const title = $("#title").val();
  const content = $("#content").val();

  if (!isTitle(title)) {
    alert("제목 형식은 영문 대소문자, 한글, 숫자, 공백 문자, 특수문자로 구성된 1글자 이상이어야 합니다.");
    return false
  }

  if (!isContent(content)) {
    alert("내용 형식은 영문 대소문자, 한글, 숫자, 공백 문자, 특수문자로 구성된 3글자~1000글자 이내이어야 합니다.");
    return false
  }

  return true
}

/**
 * 제목 형식은 영문 대소문자, 한글, 숫자, 공백 문자, 특수문자로 구성된 1글자 이상이어야 합니다.
 * a-zA-Z: 영문 대소문자
 * ㄱ-ㅎ가-힣: 한글
 * 0-9: 숫자
 * \s: 공백 문자 (스페이스, 탭 등)
 * \~\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\\\|\;\:\'\"\,\<\.\>\/\?: 특수문자
 * @param title
 * @returns {boolean}
 */
function isTitle(title) {
  const regExp = /^[a-zA-Zㄱ-ㅎ가-힣0-9\s~!@#$%^&*()\-_+={}\[\]\\|;:'",<.>\/?]+$/;
  return regExp.test(title)
}

/**
 * 내용 형식은 영문 대소문자, 한글, 숫자, 공백 문자, 특수문자로 구성된 3글자~1000글자 이내이어야 합니다.
 * a-zA-Z: 영문 대소문자
 * ㄱ-ㅎ가-힣: 한글
 * 0-9: 숫자
 * \s: 공백 문자 (스페이스, 탭 등)
 * \~\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\\\|\;\:\'\"\,\<\.\>\/\?: 특수문자
 * @param title
 * @returns {boolean}
 */
function isContent(content) {
  const regExp = /^[a-zA-Zㄱ-ㅎ가-힣0-9\s~!@#$%^&*()\-_+={}\[\]\\|;:'",<.>\/?]{3,1000}$/;
  return regExp.test(content)
}

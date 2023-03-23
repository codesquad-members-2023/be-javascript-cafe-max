const titleRegex = /^\s*\S+\s*$/;
const contentRegex = /^[\s\S]{3,1000}$/;

document
  .getElementById("posting-form")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

function validateForm() {
  const title = document.getElementById("title-box-input").value;
  const content = document.getElementById("content-box-input").value;

  if (!titleRegex.test(title)) {
    alert("제목이 공란입니다.");
    return false;
  }

  if (!contentRegex.test(content)) {
    alert("글 내용은 3~1000자 이하여야 합니다");
    return false;
  }
  return true;
}

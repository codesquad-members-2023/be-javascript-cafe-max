import {Post} from "./post.js"

// 샘플 json 데이터 생성하여 반환
function generate_post() {
  const result = [];
  for (let i = 0; i < 120; i++) {
    let title = "게시물 제목" + ((i % 15) + 1);
    let content = "내용" + ((i % 15) + 1)
    let author = "사용자" + ((i % 15) + 1);
    let date = new Date()
    result.push(new Post(title, content, author, date));
  }
  return result;
}

function fetchPost(path) {
  return fetch(path).then((res) => {
    return res.json()
  }).then((obj) => {
    return obj
  })
}

export {generate_post, fetchPost}

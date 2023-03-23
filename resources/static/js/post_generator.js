// 게시글
class Post {
  constructor(title, author, date) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.views = 0;
  }
}

// 샘플 json 데이터 생성하여 반환
function generate_post() {
  const result = [];
  const today = new Date();
  for (let i = 0; i < 120; i++) {
    let title = "게시물 제목" + ((i % 15) + 1);
    let author = "사용자" + ((i % 15) + 1);
    let date = today.toLocaleDateString();
    result.push(JSON.stringify(new Post(title, author, date)));
  }

  return result;
}

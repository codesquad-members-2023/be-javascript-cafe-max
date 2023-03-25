// 게시글
class Post {
  constructor(title, content, author, date) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
    this.views = 0;
  }
}

export {Post}

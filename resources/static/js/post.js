// 게시글
class Post {
  constructor(id, title, content, author, date) {
    this.id = id
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
    this.views = 0;
  }
}

export {Post}

// 게시글
class Post {
  constructor(title, content, author, date) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
    this.views = 0;
  }

  toJSON() {
    return {
      title: this.title,
      content: this.content,
      author: this.author,
      date: this.date,
      views: this.views
    }
  }

}

export {Post}

class Posts {
  #posts

  constructor(posts) {
    this.#posts = posts;
    this._posts = posts;
  }

  add(post) {
    this.#posts.push(JSON.stringify(post))
    localStorage.setItem("posts", JSON.stringify(this.#posts))
  }

  get posts() {
    return this._posts;
  }
}



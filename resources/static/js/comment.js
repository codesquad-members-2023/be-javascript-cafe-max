class Comment {
  #commenter
  #content
  #regdate
  #postId

  constructor(commenter, content, regdate, postId) {
    this.#commenter = commenter
    this.#content = content
    this.#regdate = regdate
    this.#postId = postId
  }

  toJSON() {
    return {
      commenter: this.#commenter,
      content: this.#content,
      regdate: this.#regdate,
      postId: this.#postId
    }
  }
}

export {Comment}

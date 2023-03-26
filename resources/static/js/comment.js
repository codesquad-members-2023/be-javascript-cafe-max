class Comment {
  #id
  #commenter
  #content
  #regDate
  #postId

  constructor(id, commenter, content, regDate, postId) {
    this.#id = id
    this.#commenter = commenter
    this.#content = content
    this.#regDate = regDate
    this.#postId = postId
  }

  toJSON() {
    return {
      id: this.#id,
      commenter: this.#commenter,
      content: this.#content,
      regDate: this.#regDate,
      postId: this.#postId
    }
  }
}

export {Comment}

class Comments {
  #comments

  constructor(comments) {
    this.#comments = comments;
  }

  add(comment) {
    this.#comments.push(comment.toJSON())
    localStorage.setItem("comments", JSON.stringify(this.#comments))
  }

  remove(id) {
    for (let i = 0; i < this.#comments.length; i++) {
      if (parseInt(this.#comments[i].id) === parseInt(id)) {
        this.#comments.splice(i, 1)
        localStorage.setItem("comments", JSON.stringify(this.#comments))
        return;
      }
    }
  }

  findAllByPostId(postId) {
    return this.#comments.filter(
        (item) => parseInt(item.postId) === parseInt(postId))
  }

  nextId() {
    let maxId = 0
    for (let i = 0; i < this.#comments.length; i++) {
      if (this.#comments[i].id > maxId) {
        maxId = this.#comments[i].id
      }
    }
    return maxId + 1
  }

  size() {
    return this.#comments.length
  }
}

async function getComments() {
  let comments = localStorage.getItem("comments")
  if (comments !== null) {
    comments = JSON.parse(comments)
    comments.sort(descDate)
    return new Comments(comments)
  }
  localStorage.setItem("comments", JSON.stringify([]))
  return new Comments([])
}

function descDate(a, b) {
  const date1 = new Date(a.date)
  const date2 = new Date(b.date)
  return date2 - date1
}

export {getComments}

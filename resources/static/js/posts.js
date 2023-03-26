import {fetchPost} from "./post_generator.js";

class Posts {
  #posts

  constructor(posts) {
    this.#posts = posts;
  }

  add(post) {
    this.#posts.push(post)
    localStorage.setItem("posts", JSON.stringify(this.#posts))
  }

  addComment(id, comment) {
    const post = this.findById(id)
    post.comments.push(comment.toJSON())
    localStorage.setItem("posts", JSON.stringify(this.#posts))
  }

  get posts() {
    return this.#posts;
  }

  length() {
    return this.#posts.length
  }

  slice(startIndex, endIndex) {
    return this.#posts.slice(startIndex, endIndex)
  }

  nextId() {
    let maxId = 0
    for (let i = 0; i < this.#posts.length; i++) {
      if (this.#posts[i].id > maxId) {
        maxId = this.#posts[i].id
      }
    }
    return maxId + 1
  }

  findById(id) {
    return this.#posts.find((item) => parseInt(item.id) === parseInt(id))
  }
}

async function getPosts() {
  let posts = localStorage.getItem("posts")
  if (posts !== null) {
    posts = JSON.parse(posts)
    posts.sort(descDate)
    return new Posts(posts)
  }
  posts = await fetchPost("/cafe/resources/static/json/post.json")
  posts.sort(descDate)
  localStorage.setItem("posts", JSON.stringify(posts))
  return new Posts(posts)
}

function descDate(a, b) {
  const date1 = new Date(a.date)
  const date2 = new Date(b.date)
  return date2 - date1
}

export {getPosts}


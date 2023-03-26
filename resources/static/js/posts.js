import {fetchPost} from "./post_generator.js";

class Posts {
  #posts

  constructor(posts) {
    this.#posts = posts;
  }

  add(post) {
    this.#posts.push(post.toJSON())
    localStorage.setItem("posts", JSON.stringify(this.#posts))
  }

  addComment(postId, comment) {
    const post = this.findById(postId)[0]
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

  createId() {
    let maxId = 0
    for (let i = 0; i < this.#posts.length; i++) {
      if (this.#posts[i].id > maxId) {
        maxId = this.#posts[i].id
      }
    }
    return maxId + 1
  }

  findById(id) {
    return this.#posts.filter((item) => {
      return parseInt(item.id) === parseInt(id)
    })
  }
}

async function createPosts() {
  let posts = localStorage.getItem("posts")
  if (posts !== null) {
    const parsePosts = JSON.parse(posts)
    parsePosts.sort(descDate)
    return parsePosts
  }
  const datas = await fetchPost("/cafe/resources/static/json/post.json")
  posts = []
  datas.forEach((item) => posts.push(item))
  posts.sort(descDate)
  localStorage.setItem("posts", JSON.stringify(posts))
  return posts
}

function descDate(a, b) {
  const date1 = new Date(a.date)
  const date2 = new Date(b.date)
  return date2 - date1
}

export {Posts, createPosts}


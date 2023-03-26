import {createPosts, Posts} from "./posts.js";
import {checkLogin} from "./header.js";

window.onload = async function () {
  checkLogin()

  const id = validateParam()
  const post = await findPostById(id)
  outputPost(post)
}

function validateParam() {
  const params = new URLSearchParams(location.search)
  const id = params.get("id")
  if (id == null) {
    location.href = "/cafe/resources/index.html"
  }
  return id
}

async function findPostById(id) {
  const datas = await createPosts()
  const posts = new Posts(datas)
  return posts.findById(id)[0]
}

function outputPost(post) {
  $("#title")[0].textContent = post.title
  $("#author")[0].textContent = post.author
  $("#regdate")[0].textContent = toLocalDate(post.date)
  $("#views")[0].textContent = post.views
  $("#content")[0].textContent = post.content
}

function toLocalDate(date) {
  return new Date(date).toLocaleDateString()
}

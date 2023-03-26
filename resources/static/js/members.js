class Members {
  #members

  constructor(members) {
    this.#members = members;
  }

  add(member) {
    this.#members.push(member.toJSON())
    localStorage.setItem("members", JSON.stringify(this.#members))
  }

  findByEmail(email) {
    return this.#members.find((member) => member.email === email)
  }

  findByNickname(nickname) {
    return this.#members.find((member) => member.nickname === nickname)
  }
}

function getMembers() {
  const members = localStorage.getItem("members")
  if (members !== null) {
    return new Members(JSON.parse(members))
  }
  return new Members([])
}

export {getMembers}

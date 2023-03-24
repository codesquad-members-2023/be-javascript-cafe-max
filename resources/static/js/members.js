class Members {
  #members

  constructor(members) {
    this.#members = members;
  }

  add(member) {
    this.#members.push(member.toJSON())
    localStorage.setItem("members", JSON.stringify(this.#members))
  }

  findEmail(email) {
    return this.#members.find((member) => member.email === email)
  }

  findNickname(nickname) {
    return this.#members.find((member) => member.nickname === nickname)
  }
}

let members = new Members(createMembers())

function createMembers() {
  const memberInfosJSON = localStorage.getItem("members")
  try {
    return memberInfosJSON ? JSON.parse(memberInfosJSON) : []
  } catch {
    return []
  }
}

export {members}

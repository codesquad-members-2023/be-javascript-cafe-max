class Member {
  #email
  #nickname
  #pwd

  constructor(email, nickname, pwd) {
    this.#email = email;
    this.#nickname = nickname;
    this.#pwd = pwd;
  }

  toJSON() {
    return {
      email: this.#email,
      nickname: this.#nickname,
      pwd: this.#pwd,
    }
  }
}

export default Member

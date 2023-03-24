function register() {
    let comment = document.getElementById("comment-input").value;

    let wrap = document.createElement("div");
    let nickname = document.createElement("div");
    let input = document.createElement("div");
    let date = document.createElement("div");
    
    wrap.classList.add("comment-in-wrap");
    nickname.classList.add("comment-nickname");
    input.classList.add("comment");
    date.classList.add("comment-date");

    nickname.innerText = "wisdom";
    input.innerText = comment;
    date.innerText = toStringDate();
    
    document.querySelector(".comment-detail").appendChild(wrap);
    document.querySelector(".comment-in-wrap").appendChild(nickname);
    document.querySelector(".comment-in-wrap").appendChild(input);
    document.querySelector(".comment-in-wrap").appendChild(date);

    document.getElementById("comment-input").value = "";

    count();
}

function toStringDate() {
    let date = new Date();

    let year = date.getFullYear() + ".";
    let month = (date.getMonth() + 1).toString().padStart(2,'0') + ".";
    let day = date.getDate().toString().padStart(2,'0') + ".";
    let hour = date.getHours().toString().padStart(2,'0') + ":";
    let minute = date.getMinutes().toString().padStart(2,'0');

    return year + month + day + hour + minute;
}

function count() {
    let target = document.querySelectorAll(".comment-in-wrap");
    let count = 0;

    for (let i = 0; i < target.length; i++) {
        count++;
    }

    document.getElementById("comment_count").textContent = count;
}
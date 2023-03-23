function makeRandomList() {
    let articleList = new Array();

    for (let i = 0; i < 10; i++) {
        let data = {
            title: "게시글 제목",
            author: "닉네임",
            date: "YYYY.MM.DD",
            viewsCount: "0"
        };
        articleList.push(data);
    }

    const jsonData = JSON.stringify(articleList);
    const json = JSON.parse(jsonData);

    let tbody = document.getElementById('tbody');
    json.forEach((article) => {
        let tr = document.createElement("tr");

        let title = document.createElement("td");
        title.textContent = article.title;
        tr.appendChild(title);

        let author = document.createElement("td");
        author.textContent = article.author;
        tr.appendChild(author);

        let date = document.createElement("td");
        date.textContent = article.date;
        tr.appendChild(date);

        let viewsCount = document.createElement("td");
        viewsCount.textContent = article.viewsCount;
        tr.appendChild(viewsCount);

        tbody.appendChild(tr);
    });
}

makeRandomList();
function makeRandomList() {
    let articleList = new Array();

    for (let i = 0; i < 10; i++) {
        let data = {
            title : "Title #" + i,
            author : "Author #" + i,
            createdAt : "2023-03-22",
            viewsCnt : i + 3
        };
        articleList.push(data);
    }

    const jsonData = JSON.stringify(articleList);
    const json = JSON.parse(jsonData);

    let tbody = document.getElementById("table-body");
    json.forEach((article) => {
        let tr = document.createElement("tr");
        let title = document.createElement("td");
        title.textContent = article.title;
        tr.appendChild(title);

        let author = document.createElement("td");
        author.textContent = article.author;
        tr.appendChild(author);

        let createdAt = document.createElement("td");
        createdAt.textContent = article.createdAt;
        tr.appendChild(createdAt);

        let viewsCnt = document.createElement("td");
        viewsCnt.textContent = article.viewsCnt;
        tr.appendChild(viewsCnt);
        tbody.appendChild(tr);
    });
}

makeRandomList();
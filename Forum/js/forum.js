fetch("forum.json")
    .then(response => response.json())
    .then(data => createTable(data));

function createTable(data) {
    const tableBody = document.querySelector("#element-table");
    for (let i = 0; i < data.length; i++) {
        const row = tableBody.insertRow();
        const numberCell = row.insertCell();
        const titleCell = row.insertCell();
        const writerCell = row.insertCell();
        const dateCell = row.insertCell();
        const viewsCell = row.insertCell();

        numberCell.textContent = data[i].id;
        titleCell.textContent = data[i].title;
        writerCell.textContent = data[i].writer;
        dateCell.textContent = data[i].date;
        viewsCell.textContent = data[i].views;
    }
}

window.onload = function () {
    buildBoard();
}

function loadBoardDataJson() {
    return JSON.parse(JSON.stringify(dummyBoardData));
}

function buildBoard() {
    let boardData = loadBoardDataJson();

    const table = document.getElementById('crudBoard').getElementsByTagName("tbody")[0];

    for (var i = 0; i < 10; i++) {
        const tableRow = table.insertRow(0);
        const numCell = tableRow.insertCell(0);
        const titleCell = tableRow.insertCell(1);
        const writerCell = tableRow.insertCell(2);
        const regDateCell = tableRow.insertCell(3);
        const hitCell = tableRow.insertCell(4);

        numCell.innerText = boardData[i].idx;
        titleCell.innerText = boardData[i].title;
        writerCell.innerText = boardData[i].writer;
        regDateCell.innerText = boardData[i].reg_date;
        hitCell.innerText = boardData[i].hit;
    }
}
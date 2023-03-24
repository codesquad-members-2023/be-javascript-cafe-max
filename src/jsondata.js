const board = JSON.parse(jsondata());
createBoard();

function jsondata() {
    let board = new Array();
		
	for (let i = 0; i <= 50; i++) {
		let data = new Object();
			
		data.title = "게시물 제목 #"+ i;
		data.nickname = "닉네임" + i;
        data.date = "2023.03." + (24 + i);
        data.hits = Math.floor(Math.random() * 1000);

		board.push(data) ;
	}

	return JSON.stringify(board) ;
}

function createBoard() {
    let content = "";
    for (let i = 0, j = 0; i < 8; i++, j++) {
        content += "<div class='column'>";
        content += "<div class='title'><a href='#'>" + board[i].title + "</a></div>";
        content += "<div class='writer'>" + board[i].nickname + "</div>";
        content += "<div class='date'>" + board[i].date + "</div>";
        content += "<div class='hits'>" + board[i].hits + "</div></div>";
    }
    document.querySelector(".list").innerHTML += content;
}
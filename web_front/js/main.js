(function() {
		
    // 리스트 생성
    let jsonList = new Array() ;
    for(let i=1; i<=7; i++){        
        let data = new Object() ;
        data.title = i+"번 게시물 입니다." ;
        data.nickname = "유저" + i ;
        data.date = "2023.12.25",
        data.viewcount = i;
        data.content = "글 내용글 내용글 내용글 내용글 내용\n"+
        "글 내용글 내용글 내용글 내용글 내용\n"+
        "글 내용글 내용글 내용글 내용글 내용\n"+
        "글 내용글 내용글 내용글 내용글 내용\n"+
        "글 내용글 내용글 내용글 내용글 내용\n"+
        "글 내용글 내용글 내용글 내용글 내용\n"        
        jsonList.push(data) ;
    }
    let jsonData = JSON.stringify(jsonList);    
   
    console.log( jsonList.length);
    getList(jsonList);
})();

function getList(jsonList) {
    let html = "";
    for(let i = 0; i<jsonList.length; i++) {
        html +=
        '<tr class="td_line" id = line'+i+'>'+
        '<td class="title">'+jsonList[i]["title"]+'</td>'+
        '<td class="nickname">'+jsonList[i]["nickname"]+'</td>'+
        '<td class="date">'+jsonList[i]["date"]+'</td>'+
        '<td class="view_count">'+jsonList[i]["viewcount"]+'</td>'+
        '</tr>'
    }
    document.getElementById('list').innerHTML += html;
}
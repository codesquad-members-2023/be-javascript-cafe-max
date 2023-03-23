const loginInfo = localStorage.getItem("loginInfo");
console.log(loginInfo);
let jsonList = [];
let  jsonData ;
if(localStorage.getItem("board")==null){
    jsonList = loadBoardDataJson();
    jsonData= JSON.stringify(jsonList);
    localStorage.setItem("board",jsonData);
}else{
    jsonData = localStorage.getItem("board");
    jsonList = JSON.parse(jsonData)
}

function loadBoardDataJson() {
    return JSON.parse(JSON.stringify(boardData));
}


getList();

// function makeJson() {
//     let jsonList = new Array() ;
//     for(let i=0; i<7; i++){        
//         let data = new Object() ;
//         data.title = i+"번 게시물 입니다." ;
//         data.nickname = "유저" + i ;
//         data.date = "2023.12.25",
//         data.viewcount = i;
//         data.content = "글";
//         data.reply =[];        
//         jsonList.push(data) ;
//     }
//     console.log(jsonList);
//     let jsonData = JSON.stringify(jsonList);
//     console.log(jsonData);
//     localStorage.setItem("board",jsonData);    
//     return jsonList;
// }

function getlogOut(){
   const name =  localStorage.getItem("loginInfo")
    if(localStorage.getItem("loginInfo")!= null) {
        document.getElementById('logout').innerHTML = name.split("@")[0]+" 로그아웃";
    }
}

document.getElementById('logout').addEventListener('click',function(){
    localStorage.removeItem("loginInfo");
    location.href="main.html"
});

function getList() {

    getlogOut();
    let html = "";
    for(let i = 0; i<jsonList.length; i++) {
        html +=
        '<tr class="td_line" id = line'+i+' onclick="movePage('+i+')">'+
        '<td class="title">'+jsonList[i]["title"]+'</td>'+
        '<td class="nickname">'+jsonList[i]["nickname"]+'</td>'+
        '<td class="date">'+jsonList[i]["date"]+'</td>'+
        '<td class="view_count">'+jsonList[i]["viewcount"]+'</td>'+
        '</tr>'
    }
    document.getElementById('count_post').innerHTML = "전체 글 : "+jsonList.length;
    document.getElementById('list').innerHTML += html;
}

function movePage(i) {
    location.href ="../board/boardinfo.html?num="+i;
}
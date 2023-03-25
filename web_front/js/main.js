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
    let length = jsonList.length-1;
    let html = "";
    for(let i = jsonList.length-1; i>=length-14; i--) {
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
    viewCountPlus(i);
    location.href ="../board/boardinfo.html?num="+i;
}

function viewCountPlus(i){
    let temp = [];
    temp = jsonList;
    temp[i].viewcount +=1 ;
    localStorage.setItem("board",JSON.stringify(temp));
}
const board = JSON.parse(localStorage.getItem("board"));
const urlParams = new URL(location.href).searchParams;
const num = urlParams.get('num');
let viewCount = board[num]["reply"].length;
getContet();
getReply();
var count = board[num]["reply"].length;
let temp = [];
for(let j = 0; j<board[num]["reply"].length; j++){
    if(board[num]["reply"][j]!=null){
        let data = {
            "writer" : board[num]["reply"][j]["writer"],
            "content" : board[num]["reply"][j]["content"],
            "date" : board[num]["reply"][j]["date"]
        };
        temp.push(data);
        console.log(temp);
    }
}



function getContet(){
    
    const titleArea = document.querySelector('.title_area');
    const postInfo = document.querySelector('.post_info');
    const contentBody = document.querySelector('.content_body');

    titleArea.innerHTML = "<h1>"+board[num]["title"]+"</h1>";

    postInfo.innerHTML =   ' <span>작성자 :' +board[num]["nickname"]+'</span>'+
                            '<span>작성일자 : ' +board[num]["date"]+'</span>'+
                            '<span>조회수 :'+board[num]["viewcount"]+'</span>';
   
    contentBody.innerHTML = board[num]["content"];
}

function getReply(){
    var reply = document.getElementById('reply_input');
    let replyarea = document.querySelector('.reply_list');
    let html ="";
    let button = "";
    replyLabel();
    for(let i = 0; i<board[num]["reply"].length; i++) {
    if(localStorage.getItem('loginInfo').split("@")[0] ==board[num]["reply"][i]["writer"] ){
        button = '<button class= "delete" >삭제</button>'
    }
    html += '<div class="reply">'+
                '<div class="reply_body">'+
                '<span>'+board[num]["reply"][i]["writer"]+'</span>'+
                '<span>'+board[num]["reply"][i]["content"]+'</span>'+
                '<span>'+board[num]["reply"][i]["date"]+'</span>'+
                button+
                '</div>'
                +'</div>';
    }
    replyarea.innerHTML = html;
    //document.querySelector('.delete').addEventListener("click",deleteReply);
    deleteClass();

    document.getElementById('reply_count').innerHTML = "댓글 "+viewCount+"개";
}

function deleteClass(){
    let items = document.querySelectorAll('.delete');
    items.forEach(item => {
        item.addEventListener('click',deleteReply);
      })
}


function writeReply(){
    var reply = document.getElementById('reply_input');
    let replyarea = document.querySelector('.reply_list');
    const name = localStorage.getItem("loginInfo").split("@")[0];
    let data ={
        writer : name,
        content : reply.value,
        date : createDate()
    }
    temp.push(data);
     board[num]["reply"] = temp;
    localStorage.setItem("board",JSON.stringify(board));
    let html ="";
    html += '<div class="reply">'+
                '<div class="reply_body">'+
                '<span>'+name+'</span>'+
                '<span>'+reply.value+'</span>'+
                '<span>'+createDate()+'</span>'+
                '<button class= "delete">삭제</button>'+
                '</div>'
                +'</div>';
    replyarea.innerHTML += html;
    reply.value = null;
    viewCount++;
    deleteClass();

    document.getElementById('reply_count').innerHTML = "댓글 "+viewCount+"개";
    count++;
}

function deleteReply() { 
    console.log(temp);
    for(let k = 0; k < temp.length; k++) {
        if(temp[k]["content"] == this.previousSibling.previousSibling.textContent)  {
            console.log(temp[k]);
          temp.splice(k, 1);
          k--;
        }
    }
    board[num]["reply"] = temp;
    localStorage.setItem("board",JSON.stringify(board));
    console.log(localStorage.getItem("board"));
    viewCount--;
    document.getElementById('reply_count').innerHTML = "댓글 "+viewCount+"개";

    getReply();

}

function createDate(){
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var hours = ('0' + today.getHours()).slice(-2); 
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2);
    return year + '-' + month  + '-' + day +"   "+ hours + ':' + minutes  + ':' + seconds;
}

function replyLabel(){
    let label = document.getElementById('form').firstElementChild;
    console.log(label);
    const name = localStorage.getItem("loginInfo").split("@")[0];
    label.innerHTML = name
}

document.getElementById('exit').addEventListener("click",function(){
    location.href = "../main/main.html";
});

document.getElementsByClassName('move_button')[0].addEventListener('click',function(){
    if(num == board.length-1){
        alert("이전글이 존재하지 않습니다.");
        return "#";
    }
    let prePage = Number(num)+1;
    viewCountPlus(prePage);
    return  location.href ="../board/boardinfo.html?num="+prePage;
});

document.getElementsByClassName('move_button')[1].addEventListener('click',function(){
    if(num == 0){
        alert("다음글이 존재하지 않습니다.");
        return "#";
    }
    let prePage = Number(num)-1;
    viewCountPlus(prePage);
    return  location.href ="../board/boardinfo.html?num="+prePage;
});



function viewCountPlus(i){
    console.log(board.length);
    let temp = [];
    temp = board;
    temp[i].viewcount +=1 ;
    localStorage.setItem("board",JSON.stringify(temp));
}
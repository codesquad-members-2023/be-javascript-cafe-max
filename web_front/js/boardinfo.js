let viewCount = 2;
const board = JSON.parse(localStorage.getItem("board"));
console.log(board)
const urlParams = new URL(location.href).searchParams;
const num = urlParams.get('num');
getContet();
getReply();
var count = board[num]["reply"].length;



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
    for(let i = 0; i<board[num]["reply"].length; i++) {
    html += '<div class="reply">'+
                '<div class="reply_body">'+
                '<span>'+board[num]["nickname"]+'</span>'+
                '<span >'+board[num]["reply"][i]+'</span>'+
                '<span>'+createDate()+'</span>'+
                '<button id= num'+i+' onclick = "deleteReply('+i+')" >삭제</button>'+
                '</div>'
                +'</div>'
    }
    replyarea.innerHTML += html;
    document.getElementById('reply_count').innerHTML = "댓글 "+viewCount+"개";
}



function writeReply(){
    var reply = document.getElementById('reply_input');
    let replyarea = document.querySelector('.reply_list');
    board[num]["reply"][count] = reply.value;
    localStorage.setItem("board",JSON.stringify(board));
    let html ="";
    html += '<div class="reply">'+
                '<div class="reply_body">'+
                '<span>'+board[num]["nickname"]+'</span>'+
                '<span >'+reply.value+'</span>'+
                '<span>'+createDate()+'</span>'+
                '<button id= num'+count+' onclick = "deleteReply('+count+')" >삭제</button>'+
                '</div>'
                +'</div>'
    replyarea.innerHTML += html;
    reply.value = null;
    viewCount++;
    document.getElementById('reply_count').innerHTML = "댓글 "+viewCount+"개";
    count++;
}

function deleteReply(i) {
    let parent = document.getElementById('num'+i).parentNode.parentNode.parentNode;
    let child  = document.getElementById('num'+i).parentNode.parentNode;
    parent.removeChild(child);
    viewCount--;
    document.getElementById('reply_count').innerHTML = "댓글 "+viewCount+"개";
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
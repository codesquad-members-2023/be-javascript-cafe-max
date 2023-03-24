const board = JSON.parse(localStorage.getItem("board"));
const urlParams = new URL(location.href).searchParams;
const num = urlParams.get('num');
let viewCount = board[num]["reply"].length;
getContet();
getReply();
var count = board[num]["reply"].length;

let temp = [];

for(let j = 0; j<board[num]["reply"].length; j++){
    if(board[num]["reply"][j]!=null)
    temp.push(board[num]["reply"][j]);
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
    for(let i = 0; i<board[num]["reply"].length; i++) {

    html += '<div class="reply">'+
                '<div class="reply_body">'+
                '<span>'+board[num]["nickname"]+'</span>'+
                '<span id =id'+i+' >'+board[num]["reply"][i]+'</span>'+
                '<span>'+createDate()+'</span>'+
                '<button class= "delete" >삭제</button>'+
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
     temp.push(reply.value);
     board[num]["reply"] = temp;
    localStorage.setItem("board",JSON.stringify(board));
    let html ="";
    html += '<div class="reply">'+
                '<div class="reply_body">'+
                '<span>'+board[num]["nickname"]+'</span>'+
                '<span id= id'+count+ '>'+reply.value+'</span>'+
                '<span>'+createDate()+'</span>'+
                '<button class= "delete">삭제</button>'+
                '</div>'
                +'</div>'
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
        if(temp[k] == this.previousSibling.previousSibling.textContent)  {
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

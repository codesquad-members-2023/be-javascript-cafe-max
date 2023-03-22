var count = 0;
let viewCount = 2;

function writeReply(){
var reply = document.getElementById('reply_input');
let replyarea = document.querySelector('.reply_list');
let html ="";
  html += '<div class="reply">'+
            '<div class="reply_body">'+
            '<span>user'+count+'</span>'+
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
    count--;
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
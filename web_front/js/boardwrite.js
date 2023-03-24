function checkBlank(){
    let title = document.getElementById('title').value;
    if(title.replace(/\s| /gi,"").length == 0) {
        alert("제목을 입력해주세요.");
        return false;
    }
    return true;
}

function checkLength(){
    let content = document.getElementById('content').value;
    if(content.length>1000 || content.length<2 ||content.replace(/\s| /gi,"").length == 0 ){
        alert("내용은 3글자 이상 1000글자 이하로만 작성하세요.");
        return false;
    }
    return true;
}




document.getElementById('write').addEventListener('click',function(e){
    if(!checkBlank()||!checkLength()){
       e.preventDefault();
       return;
    }
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let board = JSON.parse(localStorage.getItem("board"));
    let name = localStorage.getItem("loginInfo").split("@")[0];
    let data = {};
    data["title"] = title;
    data["nickname"] = name;
    data["date"] = createDate();
    data["viewcount"] = 0;
    data["content"] = content;
    data["reply"] =[];
    board.push(data);
    localStorage.setItem("board",JSON.stringify(board));
    

    const form = document.getElementById("form");
    form.action = '../main/main.html';
    form.submit();  
});

function createDate(){
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var hours = ('0' + today.getHours()).slice(-2); 
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2);
    return year + '-' + month  + '-' + day;
}
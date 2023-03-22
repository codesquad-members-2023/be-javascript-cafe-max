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
    const form = document.getElementById("form");
    form.action = '../main/main.html';
    form.submit();  
});
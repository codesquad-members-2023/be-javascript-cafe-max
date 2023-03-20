/*  keyup 이벤트 사용하여 키보드 입력될 때마다 체크
    else 너무 많이 씀 함수 계속 실행됨 괜찮나...
*/ 
let check =[false,false,false];
(function() {
    let email_element = document.getElementById('email');
    
    email_element.addEventListener('keyup',function(e){
        let email = document.getElementById('email').value;
        let error_email = document.getElementById('error_email');
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(!reg_email.test(email)){
            check[0]= false;
            error_email.style.color = "#FF0000";
            error_email.innerHTML = "이메일 형식으로 입력해 주세요.";

        }else {
            check[0] = true;
            error_email.style.color = "#00A500";
            error_email.innerHTML = "사용가능한 이메일 입니다.";
        }
    });

    let nickname_element = document.getElementById('nickname');

    nickname_element.addEventListener('keyup',function(e){
        let nickname = document.getElementById('nickname').value;
        let error_nickname = document.getElementById('error_nickname');
        if(nickname.length<2 || nickname.length>52) {
             check[1] = false;
             error_nickname.style.color = "#FF0000";
             error_nickname.innerHTML = "닉네임은 2글자 이상 50글자 이하로 입력해 주세요.";
        } else {
            check[1] = true;
            error_nickname.style.color = "#00A500";
            error_nickname.innerHTML = "사용 가능한 닉네임";
        }
    });

    let password_element = document.getElementById('password');
    password_element.addEventListener("keyup",function(e){
        let password = document.getElementById('password').value;
        var reg_password = /^[a-z0-9]{8,20}$/;
        let error_password = document.getElementById('error_password');
        if(!reg_password.test(password)){
            check[2]= false;
            error_password.style.color = "#FF0000";
            error_password.innerHTML = "비밀번호는 소문자 숫자 포함 8자리로 입력해 주세요.";
        }else{
            check[2] = true;
            error_password.style.color = "#00A500";
            error_password.innerHTML = "사용 가능한 비밀번호";
        }
           
    });
  })();

document.getElementById('signup_button').addEventListener('click',function(e){
    const error_signup= document.getElementById('error_signup')
    if(check.includes(false)){
        error_signup.innerHTML = "입력 정보를 확인해 주세요."
        return;
    }
    error_signup.innerHTML = "";
    const form = document.getElementById("form");
    form.action = 'signupSucess.html';
    form.submit();  
});



/*v1 유효성 검사 틀린 걸 클릭 이벤트 실행 시 알 수 있음, else 안 씀
     뭔가 이게 더 개발자스러운 거 같기도...
function checkAll(){
    let check = [emailCheck(),nicknameCheck(),passwordCheck()];
    statement(check);
}

function statement(check){
    if(check.includes(false)){
        alert("유효성 검사 걸림")
        return location.reload();
    }
    const form = document.getElementById("form");
    form.action = 'signupSucess.html';
    form.submit();  
 }

function emailCheck(){
   let email = document.getElementById('email').value;
   var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
   if(!reg_email.test(email)){
        return false;
   }else {
    return true;
   }
}

function nicknameCheck(){
    let nickname = document.getElementById('nickname').value;
    if(nickname.length<2 || nickname.length>52) {
        return false;
    }
    return true;
 }

 function passwordCheck() {
    let password = document.getElementById('password').value;
    var reg_password = /^[a-z0-9]{8,20}$/ ;
    if(!reg_password.test(password)){
        return false;
    }
    return true;
 }

*/
 


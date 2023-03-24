let check =[false,false];
var loginInfo = [];  

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
            loginInfo = email;
        }
    });

    let password_element = document.getElementById('password');
    password_element.addEventListener("keyup",function(e){
        let password = document.getElementById('password').value;
        var reg_password = /^[a-z0-9]{8,20}$/;
        let error_password = document.getElementById('error_password');
        if(!reg_password.test(password)){
            check[1]= false;
            error_password.style.color = "#FF0000";
            error_password.innerHTML = "비밀번호는 소문자 숫자 포함 8자리로 입력해 주세요.";
        }else{
            check[1] = true;
            error_password.style.color = "#00A500";
            error_password.innerHTML = "사용 가능한 비밀번호";
        }
           
    });

    document.getElementById('login_button').addEventListener('click',function(e){
        const error_signup= document.getElementById('error_signup')

        if(check.includes(false)){
            return;
        }
        const form = document.getElementById("form");
        form.action = '../main/main.html';
        localStorage.setItem("loginInfo",loginInfo);
        form.submit();  
    });
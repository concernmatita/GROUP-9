
var form = document.getElementById("form");
var username = document.getElementById("username");
var password = document.getElementById("password");
var email = document.getElementById("email");
var password2 = document.getElementById("password2");



form.addEventListener("click",(e) => {
    e.preventDefault();
    checkInput();
    
});
function checkInput(){
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();
    


if(usernameValue===""){

   setErrorfor(username,"username cant be blank");
}
else{
    setSuccessfor(username);
}
if(emailValue===""){
    setErrorfor(email ,"email can not be blank")

}
else{
    setSuccessfor(email)
}

if(passwordValue ===""){
    setErrorfor(password,"password can not be blank")
}
else{
    setSuccessfor(password);
}
if(password2Value ===""){
    setErrorfor(password2, "password can not be blank")

}else if(password!==password2){
setErrorfor(password2,"password does not match")
}
else{
    setSuccessfor(password2)
}
}

function setErrorfor(input,message){
var formControl = input.parentElement;
var small = formControl.querySelector("small");
small.innerText = message;
formControl.className = "form-control error";
}
function setSuccessfor(input){
    var formControl = input.parentElement;
    formControl.className = "form-control success";
}


/*
function clicking (){
    document.innerHTML = <i class = "fa fa-checked-square-o"></i>
}*/



var signin = document.querySelector(".form1")
var signup = document.querySelector(".form")
var register = document.querySelector(".register")
var login = document.querySelector(".login")

register.addEventListener("click", function(){
    signup.style.display = "block"
    signin.style.display = "none"
});

login.addEventListener("click", function(){
    signup.style.display = "none"
    signin.style.display = "block"
});
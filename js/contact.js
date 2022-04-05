//////////////////////////////////////////////////////////button up scroll
var topBtn = document.getElementById("btn-up")

window.addEventListener("scroll" , function(){
    
    if(document.documentElement.scrollTop > 400)
    topBtn.style.display = "block"
    else topBtn.style.display = "none"
})



//////////////////////////////////////////////////////////////form validation
var form = document.getElementById("my_form")
var showPassword = document.getElementById("show")
var buttonSend = document.getElementById("button")




///////////////////////////////////////////////////////////////showing password

showPassword.addEventListener("click" , function(){
    if(passwordInput.type == "password")
    passwordInput.type = "text"
    else passwordInput.type = "password"
})


  
    



form.addEventListener("input", function (e) {
   
    switch (e.target.id) {
        case "userName":
            nameValidation(e.target)
            break
        case "userEmail":
            emailValidation(e.target)
            break
        case "userPass":
            passwordValidation(e.target)
            break

    }
})


var nameValidation = (inp) => {
    var inputValue = inp.value.trim()
    if (inputValue.length < 3) handleError(inp, "enter at least 3 character")
    else handleError(inp, "")
    console.log(inputValue.length)

}



var emailValidation = (inp) => {
   
    // regular expression
    var inputValue = inp.value
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (regExp.test(inputValue) == false) handleError(inp, "please enter a valid email")
    else handleError(inp, "")

}



var passwordValidation = (inp) => {
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var inputValue = inp.value
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (strongRegex.test(inputValue) == false)
        handleError(inp, "enter at least 1 uppercase character , 1 lowercase character , 1 number .......")
    else
        handleError(inp, "")
}



var handleError = (ele, msg) => {
    ele.nextElementSibling.innerText = msg
}


/////////////////////////////////////////////////////////button submit

buttonSend.addEventListener("click" , function(e){
    
    var name = document.getElementById("userName")
    var email = document.getElementById("userEmail")
    var passwordInput = document.getElementById("userPass")
    
   

    if (form.name == null ||form.name == "" )
        {
            name.nextElementSibling.innerText ="this feild is required";
            name=false;
            e.preventDefault();  
            
        }
        else{
            name=true;
        }
        
    
    
    
    
        if (form.email==null || form.email=="")
        {
            email.nextElementSibling.innerText="this feild is required";
            email=false;
            e.preventDefault();
        }
        else{
            name=true;
        }
    
    
        if (form.passwordInput==null || passwordInput.email=="")
        {
            passwordInput.nextElementSibling.innerText="this feild is required";
            passwordInput=false;
            e.preventDefault();
        }
        else{
            name=true;
        }
        

    
    // console.log("submit")
    // var inputValue = inp.value
    // for(var i = inputValue ; i< form.length ; i++)

    // var inputValue = inp.value
    // var nameValidation =(inp)=>{
        // document.forms[0].onsubmit = function(e){
        //  name = false;
        // var email = false;
        // var passwordInput = false;
        
        
        // e.preventDefault();
        
            //  nameValidation = (inp)=>
            
               

                // alert( "Please provide your name!" );
                 
               

                // if (form.email == null)

                // alert( "Please provide your email!" );

                // if (passwordInput == null)

                // alert( "Please provide your pass!" );
            
        
        

 })
        
      
const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})


var mod=document.getElementById("signIn");
var close=document.getElementById("closeBtw");
window.onload = function() {
    mod.style.display = "block";
}


close.onclick = function() {
    mod.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == mod) {
        mod.style.display = "none";
    }
}




window.onload = function() {
    mod.style.display = "block";
    setTimeout(function() {
        mod.style.display = "none";
    }, 300000); 
}


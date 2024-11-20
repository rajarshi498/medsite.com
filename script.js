let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function sendEmail(){
    Email.send({
        Host : "smtp.elasticmail.com",
        Username : "rajarshidixit91@gmail.com",
        Password : "9E161BF5BC049CD8EE81E286335C03F0601A",
        To : "rajarshidixit91@gmail.com",
        From :document.getElementById("name").value,
        Subject : "Book appointment",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}


window.onload = function() {
    mod.style.display = "block";
    setTimeout(function() {
        mod.style.display = "none";
    }, 300000); 
}

function payment(){
    alert("payment success!!!");
}

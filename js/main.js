

document.getElementById("btn").addEventListener("click",function(m){

m.preventDefault();



let phone=document.getElementById("phone").value;
let email=document.getElementById("email").value;
let Masseage=document.getElementById("Masseage ").value;
let isValid=true

// //////////////////////////////////////////

document.getElementById("phone").style.border="2px solid black";
document.getElementById("email").style.border="2px solid black";
document.getElementById("Masseage").style.border="2px solid black";


// /////////////////////////////////////////////

document.getElementById("p1").innerHTML=""
document.getElementById("p2").innerHTML=""
document.getElementById("p3").innerHTML=""
document.getElementById("p").innerHTML=""

// Conditions


if (phone === "" || email === "" || Masseage === "") {
    document.getElementById("p").innerHTML="please inter Your data"
    return;
}

if(isNaN(phone) || phone.length>12){
document.getElementById("p1").innerHTML="not avalid number"
document.getElementById("phone").style.border="2px solid red";

}
if(!email.includes("@") || !email.includes(".")){
document.getElementById("p2").innerHTML="not avalid email"
document.getElementById("email").style.border="2px solid red";

}
if(Masseage.length>50){
document.getElementById("p3").innerHTML="Dont Be more than 50 letter"
document.getElementById("Masseage").style.border="2px solid red";

}
if (isValid) {
    document.getElementById("p").innerHTML="All data is Correct"
}
    
})

let btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};


btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

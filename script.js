var menuBtn=document.querySelector("#menuBtn");
var navMenu=document.querySelector("#navMenu");
menuBtn.addEventListener("click",function(){
  navMenu.classList.toggle("open");
  menuBtn.textContent=navMenu.classList.contains("open")?"✕":"☰";
});
document.querySelectorAll("#navMenu a").forEach(function(link){
  link.addEventListener("click",function(){navMenu.classList.remove("open");menuBtn.textContent="☰";});
});

var typing=document.querySelector("#typing");
var words=["Computer Science Student","Web Developer","C++ Programmer","Future Software Engineer"];
var wordIndex=0,charIndex=0,deleting=false;
function typeEffect(){
  var word=words[wordIndex];
  typing.textContent=word.substring(0,charIndex);
  if(!deleting){
    charIndex++;
    if(charIndex>word.length){deleting=true;setTimeout(typeEffect,1000);return;}
  }else{
    charIndex--;
    if(charIndex<0){deleting=false;charIndex=0;wordIndex=(wordIndex+1)%words.length;}
  }
  setTimeout(typeEffect,deleting?50:100);
}
typeEffect();

document.querySelector("#contactForm").addEventListener("submit",function(event){
  event.preventDefault();
  var name=document.querySelector("#name").value.trim();
  var email=document.querySelector("#email").value.trim();
  var message=document.querySelector("#message").value.trim();
  if(!name||!email||!message){alert("Please fill all fields.");return;}
  var subject=encodeURIComponent("Portfolio Contact from "+name);
  var body=encodeURIComponent("Name: "+name+"\nEmail: "+email+"\nMessage: "+message);
  window.location.href="mailto:shivakushwaha7820@gmail.com?subject="+subject+"&body="+body;
});
document.querySelector("#year").textContent=new Date().getFullYear();

var topBtn=document.querySelector("#topBtn");
window.addEventListener("scroll",function(){topBtn.classList.toggle("show",window.scrollY>300);});
topBtn.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});

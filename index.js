const ballon=document.getElementsByClassName("ballon");
const cloudOne=document.getElementsByClassName("c1");
const CloudTwo=document.getElementsByClassName("c2");
const CloudThree=document.getElementsByClassName("c3");
const CloudFour=document.getElementsByClassName("c4");
const js=document.getElementsByClassName("js");
const react=document.getElementsByClassName("react");
const css=document.getElementsByClassName("css");
const mong=document.getElementsByClassName("mong");

const api=document.getElementsByClassName("api");
const exp=document.getElementsByClassName("exp");
const html=document.getElementsByClassName("html");


function move(){
    // console.log("scrolled");
    const inc=window.scrollY
    ballon.style.bottom=3+inc*0.1+'%'


}
window.addEventListener('scroll',move)

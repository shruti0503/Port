const ballon=document.getElementById("ballon");
const cloudOne=document.querySelector(".c1");
const CloudTwo=document.querySelector(".c2");
const CloudThree=document.querySelector(".c3");
const CloudFour=document.querySelector(".c4");
const js=document.querySelector(".js");
const react=document.querySelector(".react");
const css=document.querySelector(".css");
const mong=document.querySelector(".mong");
const node=document.querySelector(".node")
const api=document.querySelector(".api");
const exp=document.querySelector(".exp");
const html=document.querySelector(".html");
const shruti=document.querySelector("#shruti")
// const ab=document.querySelector("#ab");
const maincld=document.querySelector('#maincld')
const ab2=document.querySelector("#ab2");
const ab3=document.querySelector("#ab3");
// const skills=document.querySelector("#skills")
// const l1=document.querySelector("#l1");
// const l2=document.querySelector("#l2");
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function home(){
    location.replace("portt.html")
}

function move(){
    // console.log("scrolled");
    const inc=window.scrollY
    // console.log(inc);
    CloudThree.style.bottom=37 + inc*0.24+'%';
    cloudOne.style.bottom=83 + inc*0.34 + '%';
    ballon.style.bottom= 3 + inc*0.2 + '%'
    CloudFour.style.bottom=20+inc*0.34+'%'
    CloudTwo.style.bottom=74+inc*0.33+'%'
    // ab.style.bottom=81+inc*0.33+'%';
    shruti.style.left=82+inc*0.3+'%'
    react.style.right=72+inc*0.3+'%'
    js.style.right=65+inc*0.33+'%'
    node.style.right=47+inc*0.43+'%'
    css.style.right=56+inc*0.38+'%'
   api.style.left =53+inc*0.38+'%'
   exp.style.left=61+inc*0.33+'%'
   html.style.left=70+inc*0.3+'%'
   mong.style.left=45+inc*0.43+'%'
   maincld.style.bottom=63+inc*0.3+'%';
   ab2.style.bottom=36+inc*0.5+'%';
   ab3.style.bottom=19+inc*0.6+'%';
//    l1.style.bottom=65+inc*-0.04+'%';
//    l2.style.bottom=65+inc*-0.08+'%';

   //mid cont
//    skills.style.left=-11+inc*0.12+'%'

   


}
window.addEventListener('scroll',move)

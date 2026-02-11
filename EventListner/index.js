let btn=document.querySelector("button");

btn.addEventListener("click" ,function(){
let h3=document.querySelector("h3");
let pt=getRandom();
h3.innerText=pt;

let div=document.querySelector("div");
div.style.backgroundColor=pt;

console.log("color updated");
});

function getRandom(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
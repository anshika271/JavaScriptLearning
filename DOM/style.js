// let div=document.querySelector("div");
// console.dir(div);
// let old=document.querySelector("h1");
// console.log(old);
// let a=document.querySelector("h2");
// console.log(a.innerText);
// a.innerText=a.innerText+"From apna College";
// console.log(a.innerText);
let divs=document.querySelectorAll(".box");
console.log(divs);

divs[0].innerText="New Unique value 1";
divs[1].innerText="New Unique value 2";
divs[2].innerText="New Unique value 3";
for(div of divs){
    console.log(div);
}
for(div of divs){
    console.log(div.innerText);
}

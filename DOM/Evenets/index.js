// let btn1=document.querySelector("#btn");
// btn1.onclick=()=>{
//     console.log("button was clciked!");
//     let a=25;
//     a++;
//     console.log(a);
// };
// let p=document.querySelector("#box");
// p.onmouseover=()=>{
//     console.log("you are inside div");
// }
let div=document.querySelector("#btn");
div.addEventListener("click",()=>{
    console.log("button was clicked");
})

div.addEventListener("click",()=>{
    console.log("buton was clicked-handler2");
})



// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// setTimeout(() => {
//     console.log("hello ji");
// }, 2000);


// console.log("hii.....");




//  JavaScript → Single threaded
// ↓
//  setTimeout() → Browser handles timer
// ↓
// Callback Queue
// ↓
// Event Loop
// ↓
// JS executes callback later


h1=document.querySelector("#h1");
function changeColor(color, delay) {
    setTimeout(() => {
        h1.style.color=color;
    }, delay);
}
changeColor("green",2000);
changeColor("yellow",3000);
changeColor("red",4000);
changeColor("purple",5000);

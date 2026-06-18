let count = 0;

let display =
document.querySelector("#counter");

let plus =
document.querySelector("#plus");

let minus =
document.querySelector("#minus");

let reset =
document.querySelector("#reset");

plus.addEventListener(
"click",
function(){

    count++;

    display.textContent =
    "Shri Radha " + count;

}
);

minus.addEventListener(
"click",
function(){

    count--;

    display.textContent =
    "Shri Radha " + count;

}
);

reset.addEventListener(
"click",
function(){

    count = 0;

    display.textContent =
    "Shri Radha";

}
);
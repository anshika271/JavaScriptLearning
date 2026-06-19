function hello(){
    console.log("inside hello fun");
    console.log("hello");
}
function demo(){
    console.log("calling hello function");
    hello();
}
console.log("calling demo fun");
demo();
console.log("done, Bye!" );

//these calling are being stored in stack

//Java script is a single threaded langauge
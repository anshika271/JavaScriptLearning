console.log("one");
console.log("two");
setTimeout(() => {  // this function will take 4 second time then it will print hello
    console.log("hello");
}, 4000); // timeout

console.log("three");
console.log("four");

//in javascript it will not wait to print hello first then print three and four,first will print one,two,three,four,and then hello

// Callback--->aisa function jo kisi dusre function k ander as a argument pass hota hai use callback kahte hai
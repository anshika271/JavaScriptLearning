//var let const--> keywards
// initialization means pahli value dena
// var a=12;  
// var a=13;
// window me add hota hai
// function scoped hota hai
// aap fir se declare kr skte ho and error nhi aayega same name se
//***
// let is more secure

//scope(global,block,functional)
// let--> block scoped {}<--block
// var will always be used in function because it hase functional scoped 


// in var we can reassign and redeclare also 
// but in let we can not re declare only we can reassign
//***jo variable hote hai wo do part me devide hote hai
// let  var a=indefined
// a=12; */-> is chij ko hoisting kahte hai  
// console.log(a);
//  var a=12;


 // primitives -> aisi sari values jinko copy krne par tumh ek real value mil jaye
 // strings,number,boolean,null,undefined,symbol,

 // reference ->inko copy krne par real copy nahi milegi but apko refernce milega parent ka
 // arrays,objects,functions
 // [],{},()
 // `` -> backticks
 //" "-> single quotes
let a;
console.log(a);
// Object
let obj={
    uid:1,
    name:"anshika",
     email:"test@anshika"

}
console.log(obj);
let u1=Symbol("uid");
obj[u1]=1;
//  let e=typeof 12;
let b="1";
let c=1;
let d=b-c;
let f=b+c;
console.log(d);
console.log(typeof(b));



 
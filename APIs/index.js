// let jsonRes={
//   "name": "Anshika",
//   "age": 20,
//   "course": "BTech",
//   "skills": [
//     "HTML",
//     "CSS",
//     "JavaScript"
//   ],
//   "isStudent": true
// }
// let obj=JSON.parse(jsonRes);
// console.log(obj);

// Testing API request
// Hoppscoth, Postman
// 


// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//   console.log(response);
// })
// .catch((err)=>{
//   console.log("Error-",err);
// })

//using fetch with asynch await

// let url="https://catfact.ninja/fact";
// async function getFact(){
//   let res= await fetch(url);
//   let data=await res.json();
//   console.log(data.fact);
// }

let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
  let fact= await getFact();
  console.log(fact);
  let p=document.querySelector("#result");
  p.innerText=fact;
});
let url=
"https://catfact.ninja/fact";

async function getFact(){
  try{
    let res=await axios.get(url);
    console.log(res);
    return res.data.fact;
    
  }
  catch(e){
    console.log("error", e);
    return "No fact found";
  }
}
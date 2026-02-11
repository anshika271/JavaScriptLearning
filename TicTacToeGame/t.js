let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let msgConatiner=document.querySelector(".msg-conatiner");
let msg=document.querySelector("#msg");
let turn0=true;  //playerX. playerO true->O, False->X
//store all wining pattern
const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const resetGame = () => {
    turn0 = true;
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    msgConatiner.classList.add("hide");
};


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0==true){   //playerO
            box.innerText="O";
            turn0=false;
        }
        else{  // PlayerX
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true; //when we click two time at a button then it does not change their value
checkWinner();
         });
});

const showWinner=(winner)=>{
    msg.innerText='Congratulations, Winner is ${winner}';
      msgConatiner.classList.remove("hide");
    disableBoxes();
}
        const checkWinner= () =>{
            for(let pattern of winPatterns ){
               
                 let pos1val=   boxes[pattern[0]].innerText;
                  let pos2val=  boxes[pattern[1]].innerText;
                  let pos3val=  boxes[pattern[2]].innerText;
                if(pos1val!="" && pos2val!="" && pos3val!=""){
                    if(pos1val===pos2val && pos2val===pos3val){
                        console.log("winner",pos1val);
                        showWinner(pos1val);
                    }
                }
            }
        };
        newGamebtn.addEventListener("click",resetGame);
        reset.addEventListener("click",resetGame);
   






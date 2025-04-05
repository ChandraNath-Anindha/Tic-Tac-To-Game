// let body = document.querySelector('body');
var btn = document.querySelector("#btn");
let currentMode = "white";
var boxes = document.querySelectorAll(".box");
var resetBtn = document.querySelector(".reset");
var showMsg = document.querySelector(".h2");
// var hide = document.querySelector(".hide");

// background color mode start
// btn.addEventListener ("click", ()=>{
//     if (currentMode === "white"){
//         currentMode = "dark"
//         // btn.style.backgroundColor = "black";
//         // btn.style.color="white";
//         document.body.classList.add("darkMode");
//         document.body.classList.remove("lightMode");
//         console.log('dark');

//     }
//     else{
//         currentMode="white"
//         // btn.style.backgroundColor="white";
//         // btn.style.color="black";
//         document.body.classList.add("lightMode");
//         document.body.classList.remove("darkMode");
//         console.log("white");
//     }
// })

// backgound color mode end 



// Game Logic Start 

let turn0 = true ; //playerX

var  winnerPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if (turn0 === true){
            
            box.innerText = "X";
            turn0 = false ;
        }
        else{
            
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
   


});
const showMsgWinner = (winner)=>{
    showMsg.innerText = `Congratulation Winner is ${winner}`;
    showMsg.classList.remove("hide");
    disableBox();  
}
const checkWinner = ()=>{
    for ( let checkPatter of winnerPatterns){
        console.log(checkPatter[0],checkPatter[1],checkPatter[2]);
        console.log(boxes[checkPatter[0]].innerText,boxes[checkPatter[1]].innerText,boxes[checkPatter[2]].innerText);
        let patter1Value = boxes[checkPatter[0]].innerText;
        let patter2Value = boxes[checkPatter[1]].innerText;
        let patter3value = boxes[checkPatter[2]].innerText;

        if(patter1Value != "" && patter2Value != "" && patter3value != ""){
            if (patter1Value == patter2Value && patter2Value== patter3value){
                console.log ("Winner", patter1Value);
                // alert("Winner!!");
                showMsgWinner (patter1Value);
                
            }
            else {
                console.log("Faild");
                // alert("Try Again");
            }
        }
       
        // console.log(checkPatter);
        // if (checkWinner===winnerPatterns){
        //     console.log("You Win the Match");
        //     alert("Win");
            
        // }
        // else {
        //     console.log("Try Again");
        //     alert("Try Again");
        // }
    }
}

const disableBox = () =>{
    for (oldBox of boxes){
     oldBox.disabled = true; 
    }
}

const enableBox = () =>{
    for (oldBox of boxes){
     oldBox.disabled = false; 
     oldBox.innerText = "";
    }
}
const gameReset = () =>{
    turn0 = true;
    
    enableBox();
    showMsg.classList.add("hide");
}

resetBtn.addEventListener("click", gameReset);
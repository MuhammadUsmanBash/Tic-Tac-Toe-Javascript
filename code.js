let boxes = document.querySelectorAll(".box");
let turnO = true;
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".win-msg");
let reset = document.querySelector(".reset-button");
let newGame = document.querySelector(".new-game");
let gameBox = document.querySelector(".game-box");
let count = 0;
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const disableButton = (box) =>{
    box.disabled = true;
}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        count++;
        disableButton(box);
        let isWinner = checkWinner();
        if(count === 9 && !isWinner)
        {
            drawGame();
        }
    })
});
const drawGame =() =>{
    msg.innerText = "The match has been is Drawn";
    msgContainer.classList.remove("hide");
    gameBox.classList.add("hide");
}
const resetGame = () => {
    turnO = true;
    msgContainer.classList.add("hide");
    enableBoxes();
    count = 0;
    gameBox.classList.remove("hide");
    
}
const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};
let checkWinner = () =>{
    for (let pattern of winPatterns)
    {
        let patternpos1 = boxes[pattern[0]].innerText;
        let patternpos2 = boxes[pattern[1]].innerText;
        let patternpos3 = boxes[pattern[2]].innerText;
        if(patternpos1 != "" && patternpos2 != "" && patternpos3 != "")
        {
            if(patternpos1 === patternpos2 && patternpos2 === patternpos3)
            {
                showWinner(patternpos1)
                return true;
            }
        }
    }
    return false;
}

const showWinner = (winner)=>{
    msg.innerText = `The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gameBox.classList.add("hide");
}
reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);

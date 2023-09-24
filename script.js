const x = "X"
const o = "◯"
let shift;
const squares = document.querySelectorAll(".square")
const squaresArray = [...squares]
let winner = false;
let winnerSquares;
let possitions  = [];
const endingMessage = document.querySelector("dialog")
const messageText = endingMessage.querySelector("h3");
const resetButton = endingMessage.querySelector("button");
const shiftScreen = document.querySelector("#turn");
const screenText = document.querySelector("#text")


shiftSetting()
console.log(shift)
screenPlay()
squares.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(shift=="stop") return; 
        if(element.textContent !== "") return;
        
        (shift == "Cruces")? element.innerHTML = x: element.innerHTML = o;
 
        winnerCheck();
        isGameTie()
        screenPlay()
        })
    })
    resetGame()
    
// FUNCTIONS

function winnerCheck(){
    const gameArray = squaresArray.map(element=>element.textContent) 
    
    for(let i= 0; i<=9;i+=3){
        if(gameArray[i] == gameArray[i+1] && gameArray[i] == gameArray[i+2] && gameArray[i]){
            possitions = [i,i+1,i+2];
            return possitions;
        } 
    }
    for(let i= 0; i<=3;i++){
        if(gameArray[i] == gameArray[i+3] && gameArray[i] == gameArray[i+6] && gameArray[i]){
            possitions  = [i,i+3,i+6];
            return possitions; 
        }
    }
    if(gameArray[0] == gameArray[4] && gameArray[0] == gameArray[8] && gameArray[0]){
        possitions  = [0,4,8];
        return possitions; 
    } 
    if(gameArray[2] == gameArray[4] && gameArray[2] == gameArray[6] && gameArray[2]){
        possitions  = [2,4,6];
        return possitions;
    }
    if(gameArray.includes(""))return false;
    return ("TIE");
}
    
function isWinner(combination){
    console.log("Gano la posicion: ", combination);
    combination.forEach(pos=>{
        squares[pos].classList.add("winner");
    });
    showMessage(`FIN DE PARTIDA\n  GANAN ${shift}!!`);
    shift = "stop";
}

function isGameTie(){
    winnerSquares = winnerCheck();
    if(typeof winnerSquares=="object"){
        isWinner(winnerSquares);
        return;
    }
    if(winnerSquares=="TIE") showMessage(`TERMINO EL JUEGO\n HA SIDO EMPATE`)
        shift = (shift =="Cruces")? shift = "Circulos": shift = "Cruces";
}

function showMessage(text){
    messageText.innerText =  text;
    endingMessage.showModal();
}

function resetGame(){
    resetButton.addEventListener("click",()=>{
        squaresArray.forEach(element =>{
            element.textContent = "";
            element.classList.remove("winner");
            endingMessage.close();
            shiftSetting();
            screenPlay()
            
        });
        console.log(shift)
    });
}

function shiftSetting(){
    shift =  ((Math.floor((Math.random()*2)+1)) == 1)? "Cruces": "Circulos";
}

function screenPlay(){
    if(shift == "Cruces"){
        shiftScreen.innerHTML = `X`;
    }else{
        shiftScreen.innerHTML = `O`;
    }
}
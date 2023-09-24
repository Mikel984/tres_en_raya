const squares = document.querySelectorAll(".square");
const squaresArray = [...squares]
//const array = Array.from(squares) es lo mismo
let shift = 0;
let board = [];

//console.log(squaresArray)


squares.forEach((element)=>{
    element.addEventListener("click", (event)=>{
        //console.log(shift % 2 == 0)
        //console.log(shift % 2)
        const square = event.target;
        let color = (shift % 2 == 0)? "red": "blue";
        (shift % 2 == 0)? square.style.backgroundColor = 'red': square.style.backgroundColor = 'blue';
        //(shift % 2 == 0)? square.classList.add("redSquare"): square.classList.add("blueSquare"); - Termina superponiendose la ultima clase del css al sobreponerse, otra opcion seria sacar la clase antes de volver a insertarla pero qeuda mas limpio aplicando el estilo css dinamicamente
        let squareIndex = squaresArray.indexOf(square);
        shift++;
        //console.log(board)
        board[squareIndex] = color;
        //console.log(board[squareIndex]);
        //Validamos si ha ganado
        //if(isWinner()) alert(`Bien jugado el jugador ${color} es el ganador!!!`);
        let isWinner = false;
        if(board[0] == board[1] && board[0] == board[2] && board[0]) isWinner = true;
        if(board[3] == board[4] && board[3] == board[5] && board[3]) isWinner = true;
        if(board[6] == board[7] && board[6] == board[8] && board[6]) isWinner = true;
        if(board[0] == board[3] && board[0] == board[6] && board[0]) isWinner = true;
        if(board[1] == board[4] && board[1] == board[7] && board[1]) isWinner = true;
        if(board[2] == board[5] && board[2] == board[8] && board[2]) isWinner = true;
        if(board[0] == board[4] && board[0] == board[8] && board[0]) isWinner = true;
        if(board[2] == board[4] && board[2] == board[6] && board[2]) isWinner = true;
        if(isWinner)alert(`Bien jugado el jugador ${color} es el ganador!!!`);
        })
});

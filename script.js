const x = "X"
const o = "◯"
let shift = "player1"
const squares = document.querySelectorAll(".square")
const squaresArray = [...squares]
let winner = false;


// 1 asignamos evento a cada casilla y retornamos indice de cada una de elleas tambien
squares.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        // 2 rellenamos casillas con cada click
        // cruz o raya segun el turno
        (shift == "player1")? element.innerHTML = x: element.innerHTML = o;
        //cambiamos turno cada vez que hacemos click
        (shift == "player1")? shift = "player2": shift = "player1";
        // 3 revisar ganador
        //creamos array a partir de los elemento de nuestra array7collection inicial
        // comprobamos si hay ganador en filas
        const gameArray = squaresArray.map(element=>element.textContent) 
        let combination = [];
        for(let i= 0; i<=9;i+=3){
            if(gameArray[i] == gameArray[i+1] && gameArray[i] == gameArray[i+2] && gameArray[i]){
                winner==true
                combination = [i,i+1,i+2]
                console.log (`Enhorabuena ganaste con la combinacion ${combination}`)
            }
        }
        for(let i= 0; i<=3;i++){
            if(gameArray[i] == gameArray[i+3] && gameArray[i] == gameArray[i+6] && gameArray[i]){
                combination = [i,i+3,i+6]
                console.log (`Enhorabuena ganaste con la combinacion ${combination}`)
            }
        }
        if(gameArray[0] == gameArray[4] && gameArray[0] == gameArray[8] && gameArray[0]){
            combination = [0,4,8]
            console.log (`Enhorabuena ganaste con la combinacion ${combination}`)
        }
        if(gameArray[2] == gameArray[4] && gameArray[2] == gameArray[6] && gameArray[2]){
            combination = [2,4,6]
            console.log (`Enhorabuena ganaste con la combinacion ${combination}`)
        }
        })
    })  //* problema !!!!CONTINUA EJECUTANDO LA COMPROBACION UNA VEZ TENEMOS UN GANADOR.... */

    
    /*squaresArray.forEach((element,i)=>{   !!!!!!!!!!!!!!!!! conseguir sacar la matriz cada vez con un forEach en lugar de map!!!
        const content = element.textContent;
        squaresArray.splice(index,1,content);
        console.log(squaresArray) 
    })*/

    
    
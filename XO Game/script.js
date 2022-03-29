
// let turn = `x`;

// function game (cell)
// {
//     let element = document.getElementById(cell);
//     if(turn === `x`&& element.innerHTML == '')
//     {
//         element.innerHTML='X'
//     }
// }





































let game = [
    ["","",""],
    ["","",""],
    ["","",""],
];



let player = "0";

function play(x,y) {
    if(player == "X"){
        player = "0";
    } else {
        player = "X";
    }
}

game[x][y] = player;

document.getElementById(`${x}${y}`).innerText= player;

if(game[0] [0] ==player && game[0] [1] == player &&game [0] [2] ==player) {
    alert(`Congrats ${player}`);
}
if(game[1] [0] ==player && game[1] [1] == player &&game [1] [2] ==player) {
    alert(`Congrats ${player}`);
}
if(game[2] [0] ==player && game[2] [1] == player &&game [2] [2] ==player) {
    alert(`Congrats ${player}`);
}
if(game[0] [0] ==player && game[1] [1] == player &&game [2] [0] ==player) {
    alert(`Congrats ${player}`);
}
if(game[0] [1] ==player && game[1] [1] == player &&game [2] [1] ==player) {
    alert(`Congrats ${player}`);
}
if(game[0] [2] ==player && game[1] [2] == player &&game [2] [2] ==player) {
    alert(`Congrats ${player}`);
}
if(game[0] [0] ==player && game[1] [1] == player &&game [2] [2] ==player) {
    alert(`Congrats ${player}`);
}
if(game[0] [2] ==player && game[1] [1] == player &&game [2] [0] ==player) {
    alert(`Congrats ${player}`);
}



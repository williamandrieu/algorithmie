
/*
var morpion = [
	['A', 'B', 'C'],
	['D', 'E', 'F'],
	['G', 'H', 'I']
];

_____________
|   |   |   |
| A | B | C |
|___|___|___|
|   |   |   |
| D | E | F |
|___|___|___|
|   |   |   |
| G | H | I |
|___|___|___|

console.log(morpion[0][0]);
// => A
console.log(morpion[2][2]);
// => I

// A
document.getElementById('morpion').children[0].children[0].innerHTML = 'X';
// I
document.getElementById('morpion').children[2].children[2].innerHTML = 'X';
*/
var morpion = [[],[],[]];
var turn = 'X';
var v = "X"
var win = "O"

function play(x, y) {
	if (!morpion[x][y]) {
		morpion[x][y] = turn;
		document.getElementById('morpion').children[x].children[y].innerHTML = turn;
		verify(v, x ,y);
		if (turn == 'X') {
			turn = 'O';
			v = "O"
			win = "X"
		}
		else {
			turn = 'X';
			v = "X"
			win = "O"
		}
		is_win(x,y);
	}
}

function restart() {
	morpion = [[],[],[]];
	turn = 'X';
	for (var x = 0; x <= 2; x++) {
		for (var y = 0; y <= 2; y++) {
			document.getElementById('morpion').children[x].children[y].innerHTML = '';
		}
	}
	document.getElementById('infos').children[0].innerHTML = '';
}

// Fonction de vérification de victoire
function is_win(win) {
	document.getElementById('infos').children[0].innerHTML = "";
}


function verify(v, x, y){



if ((morpion[0][0] == v) && (morpion[0][1] == v) && (morpion[0][2] == v)) {
	
			alert(v + " a gagne");
			restart();
			return v;
}
if ((morpion[1][0] == v) && (morpion[1][1] == v) && (morpion[1][2] == v)) {
	
			alert(v + " a gagne");
			restart();
			return v;
}
if ((morpion[2][0] == v) && (morpion[2][1] == v) && (morpion[2][2] == v)) {
	
			alert(v + " a gagne");
			restart();	
			return v;	
}
//=====================================================================================

if ((morpion[0][0] == v) && (morpion[1][0] == v) && (morpion[2][0] == v)) {
	
			alert(v + " a gagne");
			restart();	
			return v;	
}
if ((morpion[0][1] == v) && (morpion[1][1] == v) && (morpion[2][1] == v)) {
	
			alert(v + " a gagne");
			restart();
			return v;	
}
if ((morpion[0][2] == v) && (morpion[1][2] == v) && (morpion[2][2] == v)) {
	
			alert(v + " a gagne");
			restart();
			return v;		
}
//================D I A G O N A L E==============================================================

if ((morpion[0][0] == v) && (morpion[1][1] == v) && (morpion[2][2] == v)) {
	
			alert(v + " a gagne");
			restart();
			return v;	
}
if ((morpion[0][2] == v) && (morpion[1][1] == v) && (morpion[2][0] == v)) {
	
			alert(v + " a gagne");
			restart();
			return v;	
}






}

// faire une var pour morpion[][]



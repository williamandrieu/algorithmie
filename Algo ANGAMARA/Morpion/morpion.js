
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

function play(x, y) {
	if (!morpion[x][y]) {
		morpion[x][y] = turn;
		document.getElementById('morpion').children[x].children[y].innerHTML = turn;
		if (turn == 'X') {
			turn = 'O';
		}
		else {
			turn = 'X';
		}
		is_win();
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
function is_win() {
document.getElementById('infos').children[0].innerHTML = 'XO à gagné';

	if ( morpion[0][0]=='X' && morpion[1][0]=='X' && morpion[2][0]=='X') {
  console.log('gagne');
}
else if ( morpion[0][1]=='X' && morpion[1][1]=='X' && morpion[2][1]=='X') {
	console.log('gagne');
}
else if ( morpion[0][2]=='X' && morpion[1][2]=='X' && morpion[2][2]=='X') {
	console.log('gagne');
}
else if ( morpion[0][0]=='X' && morpion[0][1]=='X' && morpion[0][2]=='X') {
	console.log('gagne');
}
else if ( morpion[1][0]=='X' && morpion[1][1]=='X' && morpion[1][2]=='X') {
console.log('gagne');
}
else if ( morpion[2][0]=='X' && morpion[2][1]=='X' && morpion[2][2]=='X') {
console.log('gagne');
}
else if ( morpion[0][0]=='X' && morpion[1][1]=='X' && morpion[2][2]=='X') {
console.log('gagne');
}
else if ( morpion[0][2]=='X' && morpion[1][1]=='X' && morpion[2][0]=='X') {
console.log('gagne');
}
else if ( morpion[0][0]=='O' && morpion[1][0]=='O' && morpion[2][0]=='O') {
console.log('gagne');
}
else if ( morpion[0][1]=='O' && morpion[1][1]=='O' && morpion[2][1]=='O') {
console.log('gagne');
}
else if ( morpion[0][2]=='O' && morpion[1][2]=='O' && morpion[2][2]=='O') {
console.log('gagne');
}
else if ( morpion[0][0]=='O' && morpion[0][1]=='O' && morpion[0][2]=='O') {
console.log('gagne');
}
else if ( morpion[1][0]=='O' && morpion[1][1]=='O' && morpion[1][2]=='O') {
console.log('gagne');
}
else if ( morpion[2][0]=='O' && morpion[2][1]=='O' && morpion[2][2]=='O') {
console.log('gagne');
}
else if ( morpion[0][0]=='O' && morpion[1][1]=='O' && morpion[2][2]=='O') {
console.log('gagne');
}
else if ( morpion[0][2]=='O' && morpion[1][1]=='O' && morpion[2][0]=='O') {
console.log('gagne');
}
}

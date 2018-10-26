
/*
var power4 = [
	[1, 2, 3, 4, 5, 6, 7],
	[8, 9, 10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19, 20, 21],
	[22, 23, 24, 25, 26, 27, 28],
	[29, 30, 31, 32, 33, 34, 35],
	[36, 37, 38, 39, 40, 41, 42]
];

____________________________________
|    |    |    |    |    |    |    |
|  1 |  2 |  3 |  4 |  5 |  6 |  7 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
|  8 |  9 | 10 | 11 | 12 | 13 | 14 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
| 15 | 16 | 17 | 18 | 19 | 20 | 21 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
| 22 | 23 | 24 | 25 | 26 | 27 | 28 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
| 29 | 30 | 31 | 32 | 33 | 34 | 35 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
| 36 | 37 | 38 | 39 | 40 | 41 | 42 |
|____|____|____|____|____|____|____|

console.log(power4[0][0]);
// => 1
console.log(power4[5][6]);
// => 42

// 1
document.getElementById('power4').children[0].children[0].innerHTML = 1;
// 42
document.getElementById('power4').children[5].children[6].innerHTML = 42;
*/
var power4 = [[],[],[],[],[],[]];
var gravity = [5,5,5,5,5,5,5];
var turn = 'J';
var win = false;

function play(x) {
	if (gravity[x] >= 0 && win === false) {
		power4[gravity[x]][x] = turn;
		document.getElementById('power4').children[gravity[x]].children[x].children[0].classList.add(turn == 'J' ? 'yellow' : 'red');
		if (turn == 'J') {
			turn = 'R';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de Rouge';
		}
		else {
			turn = 'J';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de Jaune';
		}
		is_win(x, gravity[x]);
		gravity[x]--;
	}
}

function autoFill() {
	for (var y = 0; y <= 5; y++) {
		for (var x = 0; x <= 6; x++) {
				if (gravity[x] >= 0 && win === false) {
				power4[gravity[x]][x] = turn;
				document.getElementById('power4').children[gravity[x]].children[x].children[0].classList.add(turn == 'J' ? 'yellow' : 'red');
				var random = Math.floor(Math.random() * 2);
				if (random == 1) {
					turn = 'R';
					document.getElementById('infos').children[0].innerHTML = 'Au tour de Rouge';
				}
				else {
					turn = 'J';
					document.getElementById('infos').children[0].innerHTML = 'Au tour de Jaune';
				}
				is_win(x, gravity[x]);
				gravity[x]--;
			}
		}
	}
}

function restart() {
	power4 = [[],[],[],[],[],[]];
	gravity = [5,5,5,5,5,5,5];
	turn = 'J';
	win = false;
	for (var y = 0; y <= 5; y++) {
		for (var x = 0; x <= 6; x++) {
			document.getElementById('power4').children[y].children[x].children[0].classList.remove('yellow');
			document.getElementById('power4').children[y].children[x].children[0].classList.remove('red');
		}
	}
	document.getElementById('infos').children[0].innerHTML = 'Au tour de Jaune';
}

// Fonction de vérification de victoire
function is_win(x, y) {

	var pion = power4[y][x];
	var countL = 1;

	for (var i = 1; i <= 3 ; i++) {  // verfif lignes
		if (x-i>=0) {
			if (pion==power4[y][x-i]) {
				countL++;
			}
		}
		if (x+i<=6) {
			if (pion==power4[y][x+i]) {
				countL++;
			}
		}
		if (countL >= 4) {
			console.log('Lignes');
			win = pion;
			break;
		}
	}

	var countC = 1;
	for (var i = 1; i <= 3 ; i++) {  // verif colonnes
		if (y-i>=0) {
			if (pion==power4[y-i][x]) {
				countC++;
			}
		}
		if (y+i<=5) {
			if (pion==power4[y+i][x]) {
				countC++;
			}
		}
		if (countC >= 4) {
			console.log('Colonnes');
			win = pion;
			break;
		}
	}

	var countD1 = 1;
	for (var i = 1; i <= 3 ; i++) {    // Verif Diago Haut Gauche Bas droite
		if (y-i>=0 && x-i>=0) {
			if (pion==power4[y-i][x-i]) {
				countD1++;
			}
		}
		if (y+i<=5 && x+i<=6) {
			if (pion==power4[y+i][x+i]) {
				countD1++;
			}
		}
		if (countD1 >= 4) {
			console.log('Diago HG BD');
			win = pion;
			break;
		}
	}

	var countD2 = 1;
	for (var i = 1; i <= 3 ; i++) {
		if (y+i<=5 && x-i>=0) {
			if (pion==power4[y+i][x-i]) {
				countD2++;
			}
		}
		if (y-i>=0 && x+i<=6) {
			if (pion==power4[y-i][x+i]) {
				countD2++;
			}
		}
		if (countD2 >= 4) {
			console.log('Diago HD BG');
			win = pion;
			break;
		}
	}



	if (win == 'null') {
		document.getElementById('infos').children[0].innerHTML = 'Match nul';
	}
	else if (win !== false) {
		document.getElementById('infos').children[0].innerHTML = win + ' à gagné';
	}
}

var minesweeper = [[],[],[],[],[],[],[],[],[],[]];
var conf = [16, 24, 36];
var mines = 0;
var win = false;
// Ne rien modifier au dessus de ce commentaire
// Si debug == 1, on affiche les mines de la grille lors de la génération des mines
var debug = 1;

// Fonction pour créer automatiquement les mines sur une nouvelle grille
// Ne pas modifier cette fonction
function setGrille(difficulty) {
	restart()
	for (var x = 0; x < 16; x++) {
		for (var y = 0; y < 10; y++) {
			var random = Math.floor(Math.random() * 101);
			if (random <= conf[difficulty]) {
				minesweeper[y][x] = 'M';
				if (debug == 1) {
					document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('mine');
				}
				mines++;
			}
		}
	}
	document.getElementById('infos').children[0].innerHTML = 'Il y a ' + mines + ' mine' + (mines > 1 ? 's' : '');
}


// Fonction pour dessiner automatiquement la grille
// Ne pas modifier cette fonction
function dessinerGrille() {
	for (var x = 0; x < 16; x++) {
		for (var y = 0; y < 10; y++) {
			document.getElementById('minesweeper').children[y].children[x].classList.add('clicked');
			if (minesweeper[y][x] == 'M') {
				document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('mine');
			} else if (minesweeper[y][x] != 'E' && minesweeper[y][x] != undefined) {
				document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('m' + minesweeper[y][x]);
				document.getElementById('minesweeper').children[y].children[x].children[0].innerHTML = minesweeper[y][x];
			}
		}
	}
	win = true;
	is_win();
}

// Fonction pour recommencer
// Ne pas modifier cette fonction
function restart() {
	minesweeper = [[],[],[],[],[],[],[],[],[],[]];
	mines = 0;
	win = false;
	for (var x = 0; x < 16; x++) {
		for (var y = 0; y < 10; y++) {
			document.getElementById('minesweeper').children[y].children[x].classList.remove('clicked');
			document.getElementById('minesweeper').children[y].children[x].classList.remove('explose');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('mine');
			document.getElementById('minesweeper').children[y].children[x].children[0].innerHTML = '';
		}
	}
	document.getElementById('infos').children[0].innerHTML = '';
}

// Fonction pour dessiner une mine qui a explosée si on clique sur une mine
// Ne pas modifier cette fonction
function dessinerMineExplose(x, y) {
	document.getElementById('minesweeper').children[y].children[x].classList.remove('clicked');
	document.getElementById('minesweeper').children[y].children[x].classList.add('explose');
	document.getElementById('infos').children[0].innerHTML = 'BOOM !!!';
	win = 'mine';
}

// Fonction pour dessiner une case vide si on clique sur une case vide
// Ne pas modifier cette fonction
function dessinerCaseVide(x, y) {
	document.getElementById('minesweeper').children[y].children[x].classList.add('clicked');
}

// Fonction pour dessiner le nombre de mine si on clique sur une case qui a des mines autour d'elle
// Ne pas modifier cette fonction
function dessinerNbMine(x, y) {
	document.getElementById('minesweeper').children[y].children[x].classList.add('clicked');
	document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('m' + minesweeper[y][x]);
	document.getElementById('minesweeper').children[y].children[x].children[0].innerHTML = minesweeper[y][x];
}

// Fonction pour jouer
function play(x, y) {
	if (mines > 0 && win === false) {
		if (minesweeper[y][x] == 'M') {
			dessinerMineExplose(x, y);
		}
		else {
		// Ne rien modifier au dessus de ce commentaire
			count = 0;
			
	for (var i = 0; i <= 1; i++) {

  	if ((x - i >= 0) && (x + i <= 15) && (y - i >= 0)) {
  		count=0;
  		
		//console.log("yeah")
		if ("M" == minesweeper[y-i][x-i]) {
			count++;
			console.log(count);
			console.log("Diago");
		}
	}
	if ((x - i >= 0)  && (y - i >= 0)&&(y + i <= 9) && (x + i <= 15)) {
		
		if ("M" == minesweeper[y-i][x+i]) {
			count++;
			console.log(count);
			console.log("Diago");
		}
		if ("M" == minesweeper[y+i][x+i]) {
			count++;
			console.log(count);
			console.log("DiagoBasDroite");
		}
		if ("M" == minesweeper[y+i][x-i]) {
			count++;
			console.log(count);
			console.log("DiagoBasGauche");
		}
	}
		
	if (y + i <= 9) {
		if ("M" == minesweeper[y+i][x]) {
			console.log("bas");
			count++;
			console.log(count);
		}
	}

		if (y - i >= 0) {
		if ("M" == minesweeper[y-i][x]) {
			console.log("Haut");
			count++;
			console.log(count);
		}
	}


  	if (x - i >= 0) {
		if ("M" == minesweeper[y][x-i]) {
			console.log("Gauche");
			count++;
			console.log(count);
		}
	}
	if (x + i <= 15) {
		if ("M" == minesweeper[y][x+i]) {
			console.log("Droite");
			count++;
			console.log(count);
		}
	}
}

		if (count < 1){
			minesweeper[y][x] = "E"
			dessinerCaseVide(x, y);
		}
		if (count >= 1){
			minesweeper[y][x] = count
			dessinerNbMine(x, y);
		}
		// Ne rien modifier au dessous de ce commentaire
		}
		is_win();
	}
}

// Fonction pour completer automatiquement la grille
function completerGrille() {
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	dessinerGrille();
}

// Fonction de vérification de victoire
function is_win() {
	// Ne rien modifier au dessus de ce commentaire



	// Ne rien modifier au dessous de ce commentaire
	if (win !== false && win != 'mine') {
		document.getElementById('infos').children[0].innerHTML = 'Partie gagné';
	}
}
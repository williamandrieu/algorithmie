
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
			var d = "J"
			document.getElementById('infos').children[0].innerHTML = 'Au tour de Rouge';
		}
		else {
			turn = 'J';
			var d = "R"
			document.getElementById('infos').children[0].innerHTML = 'Au tour de Jaune';
		}
		is_win(x, gravity[x],d);
		gravity[x]--;
	}
}

function autoFill() {
	for (var y = 0; y <= 5; y++) {
		for (var x = 0; x <= 6; x++) {
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
function is_win(x, y, d) {
	t = y;
	verify(x,y,t,d);
	if (win == 'null') {
		document.getElementById('infos').children[0].innerHTML = 'Match nul';
	}
	else if (win !== false) {
		document.getElementById('infos').children[0].innerHTML = win + ' à gagné';
	}
}
function verify(x,y,t,d) {
c = y + 2;
b = y + 3;
//&& (y + i <= 5)&& (x + i <= 6)

var count = 1;
var coun = 1;

for (var i = 1; i <= 3; i++) {
  
  	if ((x - i >= 0) && (x + i <= 6) && (y - i >= 0)) {
		//console.log("yeah")
		if (power4[y][x] == power4[y-i][x-i]) {
			count++;
			//console.log(count);
			//console.log("Diago");
		}
	}
	if ((x - i >= 0)  && (y - i >= 0)) {
		console.log("yeah")
		if (power4[y][x] == power4[y-i][x+i]) {
			count++;
			console.log(count);
			console.log("Diago");
		}
	}

	if (y + i <= 5) {
		if (power4[y][x] == power4[y+i][x]) {
			console.log("bas");
			count++;
			console.log(count);
		}
	}

  	if (x - i >= 0) {
		if (power4[y][x] == power4[y][x-i]) {
			console.log("droite");
			coun++;
			console.log(count);
		}
	}
	if (x - i <= 6) {
		if (power4[y][x] == power4[y][x+i]) {
			console.log("Gauche");
			count++;
			console.log(count);
		}
	}
	if (count >= 4) {
		console.log(d + " GAGNE")
		win = power4[y][x];
		//break;
	}
	// if (coun >= 4) {
	// 	console.log(d + " GAGNE")
	// 	win = power4[y][x];
	// 	//break;
	// }
}


}





// if ((power4[y][x] == "R") && (power4[y][x+1] == "R") && (power4[y][x+2] == "R") && (power4[y][x+3] == "R")) {
	
// 			console.log(" a gagne");
				
//    	}

// if ((power4[y][x] == "R") && (power4[y][x-1] == "R") && (power4[y][x-2] == "R") && (power4[y][x-3] == "R")) {
	
// 			console.log(" a gagne");
				
//    	}

	
// if ((power4[y][x] == "R")) {
	
// 			//console.log(" a gagne");
				
//    	}
// }
	// if ((power4[y][x] == "R") && (power4[y-1][x] == "R") && (power4[y-2][x] == "R") && (power4[y-3][x] == "R")) {
	
	// 		console.log(" a gagne");
				
 //   	}
  

//for (var z = y; 5 >= y && x >= 0; y++) {
//console.log("Y",y);}




//faire une boucle



// for (var x = o; x >= 0; x<=5 ; x++) {
// console.log('hello');
// }
// console.log(x);


 //&& (power4[y-1][x] == "R") && (power4[y-2][x] == "R") && (power4[y-3][x] == "R")


//if ((power4[5][0] || power4[5][1] || power4[5][2] || power4[5][3] || power4[5][4] || power4[5][5] ||  power4[5][6]) == undefined)




//   	//console.log(power4[5][x])
// if (power4[5][x] == ("J" || "R")) {
// 	console.log(power4[y][x]);
// 	if (power4[y][x] == "J") {
//    	console.log(power4[y+1][x])
//    }

//console.log(power4[y])
//console.log("power4[c][x]",d)
// if (y > 3) {

//    }else {

 
// 	if (power4[2][x] == "R")   {
// 		console.log(power4[y++][x]);
// 		if (power4[y++][x] == "R") {
// 			if (power4[c][x] == "R") {
// 				if(power4[b][x] == "R") {
// 					console.log("Rouge gagne")
// 				}
// 			}
// 		}
// 	}
// }

// if (y > 3) {
//    }else {
// 	if (power4[2][x] == d)   {
		
// 		if (power4[y++][x] == d) {
// 			if (power4[c][x] == d) {
// 				if(power4[b][x] == d) {
// 					console.log(d + " gagne")
// 				}
// 			}
// 		}
// 	}
// }

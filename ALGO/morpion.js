
var morpion1 = ['A', 'A', 'A', 'D', 'E', 'F', 'G', 'H', 'I'];

// var morpion2 = [
// 	['A', 'B', 'C'],
// 	['D', 'E', 'F'],
// 	['G', 'H', 'I']
// ];

// _____________
// |   |   |   |
// | A0| B1| C2|
// |___|___|___|
// |   |   |   |
// | D3| E4| F5|
// |___|___|___|
// |   |   |   |
// | G6| H7| I8|
// |___|___|___|



// console.log(morpion1[0]);
// // => A
// console.log(morpion1[8]);
// // => I

// console.log(morpion2[0][0]);
// // => A
// console.log(morpion2[2][2]);
// // => I



if (morpion2[0][0] == "A") {
	if (morpion2[1][0] == "B") {
		
		if (morpion2[2][0] == "C") {
			
			console.log("abc","c'est gagne")
		}
	}
}

if (morpion2[3][0] == "D") {
	if (morpion2[4][0] == "E") {
		
		if (morpion2[5][0] == "F") {
			
			console.log("def","c'est gagne")
		}
	}
}


if (morpion2[6][0] == "G") {
	if (morpion2[7][0] == "H") {
		
		if (morpion2[8][0] == "I") {
			
			console.log("ghi","c'est gagne")
		}
	}
}



//=====================================================================================



if (morpion2[0][0] == "A") {
	if (morpion2[3][0] == "B") {
		
		if (morpion2[6][0] == "C") {
			
			console.log("ADG","c'est gagne")
		}
	}
}

if (morpion2[1][0] == "D") {
	if (morpion2[4][0] == "E") {
		
		if (morpion2[7][0] == "F") {
			
			console.log("BEH","c'est gagne")
		}
	}
}


if (morpion2[2][0] == "G") {
	if (morpion2[5][0] == "H") {
		
		if (morpion2[8][0] == "I") {
			
			console.log("CFI","c'est gagne")
		}
	}
}


//==============================================================================




if (morpion2[0][0] == "A") {
	if (morpion2[4][0] == "B") {
		
		if (morpion2[8][0] == "C") {
			
			console.log("diag1","c'est gagne")
		}
	}
}

if (morpion2[2][0] == "D") {
	if (morpion2[4][0] == "E") {
		
		if (morpion2[6][0] == "F") {
			
			console.log("diag2","c'est gagne")
		}
	}
}






//  "Je suis capable de travailler en groupe quand j'ai un groupe"
//  "Je suis capable de manger mcdo quand j'ai faim"

//  "Je ne suis pas capable de travailler sur un mac quand je n'ai pas de mac"
//  "Je ne suis pas capable de conduire une voiture quand je n'ai pas de voiture" 


// Si je n'ai pas de mac {
// Aller au magasin
// Acheter un mac
// }

// Si je n'ai pas de voiture. {
// Trouver un belle voiture
// Voler la voiture
// Esquiver la police

// }
// var X = 8;
 

// if (X < 10) {
// console.log('ffg', X -= 5 )

// }
// //Log();

// var X1 = 0;

// while (X1 < 10) {

// 	console.log(X1);
// 	X1++;
// }

// function functionAuCarre(param1) {
// 	return param1*param1

// 	}
// 	console.log('\n' + functionAuCarre(2));
// 	console.log('functionAuCarre 42', functionAuCarre(42));


// var object = [ville:1,city:2,bite:3];
// for (var key of object) {

// console.log(objet[key]);
// }


// var monObjet = {tableau:[1,2,3,4,5,6,7,8]};


// for (z = 0; z < Object.keys(monObjet.tableau).length; z++) {

// var MT = monObjet.tableau[z];


// console.log(MT);

// }

// for(var item of Object.keys(monObjet.tableau)) {
// 	console.log('item',monObjet.tableau[item]);
//}

// varTotal = 0;
// i = 0;
// function fonctionNombrePremier (param1) {
// 	//param1 = i;
// 	param3 = param1 % 3;
// 	if (param1 % 2 == 1) {
// 		console.log('impair', param1);
// 		//return param1 + ' est un nombre premier.';
// 		//console.log("ca marche1")

// 		if (param1 % 3 == 1){
// 			console.log('divisible par 3', param1);
// 			varTotal += param1;
// 			return varTotal + " n'est pas un nombre premier";
// 		} else {
// 			console.log('premier', param1);
// 	 		return param1 + " est un nombre premier";
// 	 	}
// 	}
// 	else {
// 		console.log('pair', param1);
// 		varTotal += param1;
// 		return varTotal + " n'est pas un nombre premier";
// 	}
// }



// for (t = 0; t < 15 ; t++) {

// 	console.log('fonctionNombrePremier', i + ' > ' + varTotal + ' > ' + fonctionNombrePremier(i));
// i++;
// }
// // varI = 0
// // Boucle tant que varI est inférieur à 31 {
// // Affichage de fonctionNombrePremier(varI)
// // Incrémentation de varI
// // }
// Affichage de varTotal

//i = 15;








// f = 20;
// e = f;
 
// for (t = f; t > 0 ; --t) {
	
// i = f % e ;
// //console.log(">>>>",t);
// //console.log(">>>>",--t);
// console.log("unF",f);
// console.log("unE",e);
// if (i == 0 && e ==  f || e == 0) {

// 	console.log("cest un nombre premier")
// }

// console.log("FFF",f);
// console.log("Modulo",f,"%",e);
// console.log("I",i);
// --e;

// }

//===========================================================================================




f = 7;
c = 1;

for (var i = 7; i >= 0; i--) {
	
	g = f % i;
	console.log(i);
	console.log("g>>>",g);

	if ((f % 2) == 0) { c = 12;}

	if (!(g == 0) && f == (f || !1)){
		c += 1;
		console.log("c=o",c)
	}

	if (i <= 1 &&  g == 0){
		
		if (f == i){
			c = 1;
			console.log("ca marche aussi la ")
		} else {

		c = 0;
		console.log("ca marche")
	}

	}
	console.log("c'est ",c)
}
console.log("c>>",c);
if (c <= 2) {

	console.log(f , " est un nombre premier")
}



// //===========================================================================================
varTotal = 1;
function nbPremier(f) {
	//if (varTotal != 1) { varTotal+=1}

		if (f != 1) {
			varTotal += f;
c = 1;

			for (var i = 14; i >= 0; i--) {
	
			g = f % i;
	

	if (g == 0 && !(f == i || i == 1)) {

		c++;

	}
}



if (c < 2) {
	varTotal -= f;
	//varTotal -= 31;
	console.log(f,"c'est premier");
}

}}

for (var i = 31; i >= 0; i--) {
	nbPremier(i);
	
}
console.log(varTotal);


















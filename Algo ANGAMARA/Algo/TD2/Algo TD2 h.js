var monObjet = {tableau:[1,2,3,4,5,6]}
  for(i=0;i< Object.keys(monObjet.tableau).length ;i++){
    var aff = monObjet.tableau[i];
    console.log(aff);
}

for(var item of Object.keys(monObjet.tableau)){
  console.log('item',monObjet.tableau[item]);
}

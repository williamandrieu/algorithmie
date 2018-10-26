if ( morpion[0][0] == morpion[1][0] && morpion[0][0] == morpion[2][0]) {
  console.log('gagne');
}
else if ( morpion[0][1] == morpion[1][1] && morpion[0][1] == morpion[2][1]) {
  console.log('gagne');
}
else if ( morpion[0][2] == morpion[1][2] && morpion[0][2] == morpion[2][2]) {
  console.log('gagne');
}
else if ( morpion[0][0] == morpion[0][1] && morpion[0][0] == morpion[0][2]) {
  console.log('gagne');
}
else if ( morpion[1][0] == morpion[1][1] && morpion[1][0] == morpion[1][2]) {
  console.log('gagne');
}
else if ( morpion[2][0] == morpion[2][1] && morpion[2][0] == morpion[2][2]) {
  console.log('gagne');
}
else if ( morpion[0][0] == morpion[1][1] && morpion[0][0] == morpion[2][2]) {
  console.log('gagne');
}
else if ( morpion[0][2] == morpion[1][1] && morpion[0][2] == morpion[2][0]) {
  console.log('gagne');
}
else {
  console.log('Pas de gagnant');
}

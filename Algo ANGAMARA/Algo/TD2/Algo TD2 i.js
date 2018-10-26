var tot=0;
function premier(param1){
  var vrai=1;

   if (param1===1) {
    tot+=param1;
  }
  else {
    for(var i=param1-1;i!=1;i--) {
    if (param1%i==0){
    vrai = 0;
      }
    }
    if(vrai!=0){
      console.log(param1,'est premier');
  } else {
      tot+=param1;
    }

  }
  }

var a=1;
while (a<31) {
  premier(a)
   a++
 }
 console.log(tot);

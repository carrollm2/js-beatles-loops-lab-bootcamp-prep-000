function theBeatlesPlay(musicians, instruments){
  var array = []

  for (var i = 0; i < musicians.length; i++){
      array.push(`${musicians[i]}` + " plays " + `${instruments[i]}`)
  }

  return array
}

function johnLennonFacts(facts){
  var i = 0;
  var array = []

  while(i < facts.length){
    array.push(`{facts[i]}` + "!!!")
    i--;
  }
}




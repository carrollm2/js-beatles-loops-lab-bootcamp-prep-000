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
    array.push(`${facts[i]}` + "!!!")
    i++;
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  if (number < 15){
    array.push("I love the Beatles!")
  } else {
    var count = 1;
    do{
      array.push("I love the Beatles!")
      count++
    } while (count <= number);
  }

  return array
}

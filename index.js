function theBeatlesPlay(musicians, instruments){
  var array = []

  for (var i = 0; i < musicians.length; i++){
      array.unshift(`${musicians[i]}` + " plays the " + `${instruments[i]}`)
  }

  return array
}

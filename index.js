function theBeatlesPlay(musicians, instruments){
  array = []

  for (var i = 0; i < musicians.length; i++){
    for (var j = 0; j < instruments; j++){
      array.push("musicians[i] + plays the + instruments[j]")
    }
  }

  return array
}

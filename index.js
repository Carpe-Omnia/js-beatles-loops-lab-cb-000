function theBeatlesPlay(guys, tools){
  var empty = [] ;
  for(var i = 0 ; i < guys.length ; i++){
    var sent = `${guys[i]} plays ${tools[i]}` ;
    empty.push(sent) ;
  }
  return empty ;
}

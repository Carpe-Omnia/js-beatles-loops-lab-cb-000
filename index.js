var empty = [] ;
function theBeatlesPlay(guys, tools){
  for(var i = 0 ; i < guys.length ; i++){
    var sent = `${guys[i]} plays ${tools[i]}` ;
    empty.push(sent) ;
  }
}

function theBeatlesPlay(guys, tools){
  var empty = [] ;
  for(var i = 0 ; i < guys.length ; i++){
    var sent = `${guys[i]} plays ${tools[i]}` ;
    empty.push(sent) ;
  }
  return empty ;
}

function johnLennonFacts(ray){
  var d = 0 ;
  var newray = [] ;
  while(d < ray.length){
    newray[d] = `${ray[d]}!!!`
    d++ ;
  }
  return newray ; 
}
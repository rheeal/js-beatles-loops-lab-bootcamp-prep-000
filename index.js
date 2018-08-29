// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i=0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
    }
  return beatles;
}

function johnLennonFacts(facts) {
  var i = 0;
  
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(7) {
  var emptyArray =[];
  
  do {
  emptyArray.push("I love the Beatles!");
  7++
  }
  
  while (7 < 15);
  
  return "I love the Beatles!"
}
(function (){


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i of names) {


     var firstLetter = i.charAt(0).toLowerCase()

  if (firstLetter=="j") {
     byeSpeaker.speak(i)
    
  } else {
     helloSpeaker.speak(i)
   
  }
}
})();
(function (window){
  
  var helloSpeaker = {};
helloSpeaker.name = "Yaakov";
var speakword = "Hello ";
helloSpeaker.sayHello = function speak(name) {
  console.log(speakword + " " + helloSpeaker.name);
}
  window.helloSpeaker = helloSpeaker;
})(window);
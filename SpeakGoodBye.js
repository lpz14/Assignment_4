(function (window){
  
  var byeSpeaker= {};
byeSpeaker.name = "John";
var speakword = "Good Bye ";
byeSpeaker.goodbye = function  speak(name) {
  console.log(speakword + " " + byeSpeaker.name);
}
  window.byeSpeaker = byeSpeaker;
})(window);
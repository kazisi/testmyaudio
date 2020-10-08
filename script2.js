var sound = $("#videoPlayer");
var slider2 = $("#sound").value/100;
slider.click(function(){
   var value = prompt("Write the volume's parcentege in between 0.0 to 1.0")
   sound.prop("volume", value) 
})
function ten (){
   sound.prop("volume", 1.0) 
   ocument.getElementsByClassName("x")
   document.getElementsByClassName("x").html("100%");
}
function nine (){
   sound.prop("volume", 0.9) 

}
function eight (){
   sound.prop("volume", 0.8) 

}
function seven (){
   sound.prop("volume", 0.7) 

}
function six (){
   sound.prop("volume", 0.6) 

}
function five (){
   sound.prop("volume", 0.5) 

}
function four (){
   sound.prop("volume", 0.4) 

}
function three (){
   sound.prop("volume", 0.3) 

}
function two (){
   sound.prop("volume", 0.2) 

}
function one (){
   sound.prop("volume", 0.1) 

}
function zero (){
   sound.prop("volume", 0.0)
}
function let (){
   sound.prop("volume", slider2)
}
$('#forward').click(function(){
  
   $('#videoPlayer').src = "Lambiyan si judaiyan karaokeinstrumentalarijit singh.mp3";

})



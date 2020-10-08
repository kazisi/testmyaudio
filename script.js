var VP = VP || {};

var barSize = new Number(500);
var scrubberContainer = $('#scrubberContainer')[0];
var scrubberBar = $('#scrubberBar')[0];
var playPauseBtn = $('#playPauseBtn')[0];
var videoPlayer = $('#videoPlayer')[0];
var updatePlayer;
var updateTimer;
$('#previous').click(function(){
    videoPlayer.seek(Math.max(0,videoPlayer.currentTime() - 10))
})



VP.init = function(){
    playPauseBtn.addEventListener('click', VP.togglePlayPause, false);
    scrubberContainer.addEventListener('click', VP.scrubberClicked, false);
    videoPlayer.addEventListener('timeupdate', VP.updateTimer);
}

VP.togglePlayPause = function(){
    if(!videoPlayer.paused && !videoPlayer.ended){
        videoPlayer.pause();
        $('#playPauseBtn').html('<i class="far fa-play-circle"></i>');
        window.clearInterval(updatePlayer);
        window.clearInterval(updateTimer);
    } else {
        videoPlayer.play();
        $('#playPauseBtn').html('<i class="fal fa-pause"></i>');
        updatePlayer = setInterval(function()
        {
            VP.updateScrubber();
        }, 100);
    }
}

VP.updateScrubber = function(){
    if(!videoPlayer.ended){
        var size = parseInt(videoPlayer.currentTime * barSize/videoPlayer.duration);
        $('#scrubberBar').css('left', size + 'px');
         $('#dot').css('width', size + 'px')
         
    }
    else{
        $('#scrubberBar').css('left', '0px');
        $('#playPauseBtn').css('Play');
        window.clearInterval(updatePlayer);
    }
};

VP.scrubberClicked = function(e){
    if(!videoPlayer.paused && !videoPlayer.ended){
        var mouseX = e.pageX - scrubberContainer.offsetLeft;
        var newTime = mouseX * videoPlayer.duration/barSize;
        videoPlayer.currentTime = newTime;
        $('#scrubberBar').css('left', mouseX + 'px');
        $('#dot').css('width', size + 'px')
       
    }
};

VP.updateTimer = function(){
    var eTime;
    var tTime;

    //calculate elapsed time
    var eSeconds = Math.round(videoPlayer.currentTime);
    var eMinutes = Math.floor(eSeconds/60);
    eMinutes = (eMinutes >= 10) ? eMinutes : "0" + eMinutes;
    eSeconds = Math.floor(eSeconds % 60);
    eSeconds = (eSeconds >= 10) ? eSeconds : "0" + eSeconds;

    //calculate total time
    var tSeconds = Math.round(videoPlayer.duration);
    var tMinutes = Math.floor(tSeconds/60);
    tMinutes = (tMinutes >= 10) ? tMinutes : "0" + tMinutes;
    tSeconds = Math.floor(tSeconds % 60);
    tSeconds = (tSeconds >= 10) ? tSeconds : "0" + tSeconds;

    //assign these values to our variables
    eTime = '' + eMinutes + ':' + eSeconds;
    tTime = '' + tMinutes + ':' + tSeconds;

    //display in timer
    $('.timer').html('' + eTime + ' / ' + tTime);
    $('.blue').html('' + eTime + ' / ' + tTime + ' ' +'Audio Player');
};
$("#ten").click(function(){
   $('.x').css('transition','1s')
    $('.x').fadeIn();
   $('.x').fadeOut(100);
    $('.x').html('100%');
})
$("#nine").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('90%');
 })
 $("#eight").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('80%');
 })
 $("#seven").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('70%');
 })
 $("#six").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('60%');
 })
 $("#five").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('50%');
 })
 $("#four").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('40%');
 })
 $("#three").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('30%');
 })
 $("#two").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('20%');
 })
 $("#one").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('10%');
 })
 $("#zero").click(function(){
    $('.x').css('transition','1s')
     $('.x').fadeIn();
    $('.x').fadeOut(100);
     $('.x').html('Muted');
 })
 var sound = $("#videoPlayer");
 $(".sound").click(function(){
  
 })
$('.sound').click(function(){
   
        $('.x').css('transition','1s')
        $('.x').fadeIn();
       $('.x').fadeOut(100);
        $('.x').html('Muted');
        $(".sound").html('<i class="fal fa-volume-mute"></i>');
        sound.prop("volume", 0.0);
        $('.mute').html('<i class="fal fa-volume"></i>')  
           
})
$('.mute').click(function(){
$('.sound').html('<i class="fal fa-volume"></i>');
$('.mute').html('<i class="fal fa-volume-mute"></i>');
sound.prop("volume", 1.0);
$('.x').fadeIn();
$('.x').fadeOut(100);
 $('.x').html('Maxed');
})
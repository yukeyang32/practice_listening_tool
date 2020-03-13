// input.onchange = function(e){
//     var sound = document.getElementById('sound');
//     sound.src = URL.createObjectURL(this.files[0]);
//     // not really needed in this exact case, but since it is really important in other cases,
//     // don't forget to revoke the blobURI when you don't need it
//     sound.onend = function(e) {
//       URL.revokeObjectURL(this.src);
//     }
//   }

function handleAudioFiles(event) {
	var files = event.target.files;
    $("#audio").attr("src", URL.createObjectURL(files[0]));
    $("#player")[0].load();
    $("#status").text("Status: Ready to play").css("color","green");
    $('#play_audio').click(function() {
        $("#player")[0].play();
        $("#status").text("Status: Playing");
    });
    $('#pause_audio').click(function() {
        $("#player")[0].pause();
        $("#status").text("Status: Paused");
    });

    $('#replay_audio').click(function() {
        $("#player")[0].currentTime = 0;
    });


}
var audio = document.getElementById("input");

audio.addEventListener("change", handleAudioFiles, false);

document.getElementById("input").addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
});

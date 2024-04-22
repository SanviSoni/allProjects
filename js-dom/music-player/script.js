
var progress = document.querySelector('#progress');
var song = document.querySelector('#song');
var playbutton = document.querySelector('#play-btn');

song.onloadedmetadata = () => {

    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {

    if (playbutton.classList.contains('ri-play-large-fill')) {


        song.pause();
        playbutton.classList.remove('ri-play-large-fill')
        playbutton.classList.add('ri-pause-large-fill')
    }
    else {
        song.play();
        playbutton.classList.add('ri-play-large-fill')
        playbutton.classList.remove('ri-pause-large-fill')
    }

}


if (song.play()) {

    setInterval(() => {

        progress.value = song.currentTime;

    }, 500);


}

progress.onchange = function () {

    song.play();
    song.currentTime = progress.value;

    playbutton.classList.remove('ri-play-large-fill')
    playbutton.classList.add('ri-pause-large-fill')

}


const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const timeTaken = document.getElementById("timeTaken");
const totalTime = video.duration;

function toggleVideoStatus()
{
    if (video.paused)
    {
        video.play();
    } else {
        video.pause();
    }
}

function updatePlayIcon()
{
    if (video.paused)
    {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
    else
    {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

function updateProgress()
{
    progress.value = (video.currentTime / video.duration) * 100;

    let totalMins = Math.floor(video.duration/60);
    let totalSecs = Math.floor(video.duration%60);
        let mins = Math.floor(video.currentTime / 60);
        if (mins < 10)
        {
            mins = '0' + String(mins);
        }
        let secs = Math.floor(video.currentTime % 60);
        if (secs < 10) {
            secs = '0' + String(secs);
        }
        timestamp.innerHTML = `${totalMins}:${totalSecs}`;
        timeTaken.innerHTML = `${mins}:${secs}`;

}
function setVideoProgress()
{
    video.currentTime = (+progress.value * video.duration) / 100;
}

function stopVideo()
{
    video.pause();
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);

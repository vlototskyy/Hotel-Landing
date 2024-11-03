document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.querySelector('.play-container'),
        label = playButton.querySelector('label'),
        music = document.getElementById('music');

    playButton.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            label.textContent = "Pause Music";
        } else {
            music.pause();
            label.textContent = "Music for good mood :)";
        }
    });
});

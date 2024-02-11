audio = new Audio('sound.mp3');
setTimeout(() => {
    audio.loop=true;
    audio.play()
}, 100);
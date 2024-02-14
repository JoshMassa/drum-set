var drumSet = document.querySelector('.set');

drumSet.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        var letterClicked = event.target.textContent;
        playSound(letterClicked);
        animateBtn(letterClicked);
    }
});

document.addEventListener('keypress', function(event) {
    var keyPressed = event.key;
    playSound(keyPressed);
    animateBtn(keyPressed);
});

function playSound(letter) {
    var sound;
    switch (letter) {
        case 'a':
            sound = new Audio('./assets/sounds/tom-1.mp3');
            break;
        case 's':
            sound = new Audio('./assets/sounds/tom-2.mp3');
            break;
        case 'd':
            sound = new Audio('./assets/sounds/tom-3.mp3');
            break;
        case 'f':
            sound = new Audio('./assets/sounds/tom-4.mp3');
            break;
        case 'j':
            sound = new Audio('./assets/sounds/snare.mp3');
            break;
        case 'k':
            sound = new Audio('./assets/sounds/crash.mp3');
            break;
        case 'l':
            sound = new Audio('./assets/sounds/bass-kick.mp3');
            break;
    } 
    sound.play();
}

function animateBtn(letter) {
    var activeBtn = document.querySelector('.' + letter)
    activeBtn.classList.add('pressed');
    setTimeout(function() {
        activeBtn.classList.remove('pressed');
    }, 100)
}
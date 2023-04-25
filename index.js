var drumButton = document.querySelectorAll(".drum").length;

document.addEventListener("keypress", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

for (var i = 0; i <= drumButton; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        makeSound(this.innerHTML)
        buttonAnimation(this.innerHTML)
    })
}

function playSound(sound) {
    var sound = new Audio('sounds/' + sound);
    sound.play()
}

function buttonAnimation (currentKey) {
    var buttonPressed = document.querySelector("." + currentKey)
    buttonPressed.classList.add("pressed")

    setTimeout(function(){
        buttonPressed.classList.remove("pressed")
    },100)
}

function makeSound(key) {
    switch (key) {
        case "w":
            playSound("tom-4.mp3")
            break;
        case "a":
            playSound("tom-3.mp3")
            break;
        case "s":
            playSound("tom-2.mp3")
            break;
        case "d":
            playSound("tom-1.mp3")
            break;
        case "j":
            playSound("snare.mp3")
            break;
        case "k":
            playSound("kick-bass.mp3")
            break;
        case "l":
            playSound("crash.mp3")
        default:
            break;
    }
}

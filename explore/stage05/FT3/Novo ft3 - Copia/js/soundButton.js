import { Sounds } from "./sounds.js";

const sounds = Sounds();


export function SoundButton({
    buttonFlorestOff,
    buttonFlorestOn,
    buttonRainOff,
    buttonRainOn,
    buttonCoffeeOff,
    buttonCoffeeON,
    buttonFireOff,
    buttonFireOn,
    buttonRainOff_dark,
    buttonRainOn_dark,
    buttonFlorestOff_dark,
    buttonFlorestOn_dark,
    buttonCoffeeOff_dark,
    buttonCoffeeON_dark,
    buttonFireOff_dark,
    buttonFireOn_dark,
    
}) {
    function RainOn() {
    buttonRainOff.addEventListener("click", function () {
        buttonRainOn.classList.remove("hide");
        buttonRainOff.classList.add("hide");
        document.body.classList.add("whitee");
        sounds.rainSound.play();
    });
    buttonRainOff_dark.addEventListener("click", function () {
        buttonRainOn_dark.classList.remove("hide");
        buttonRainOff_dark.classList.add("hide");
        sounds.rainSound.play();
})
    }

    function RainOff() {
    buttonRainOn.addEventListener("click", function () {
        buttonRainOn.classList.add("hide");
        buttonRainOff.classList.remove("hide");
        document.body.classList.remove("whitee");
        sounds.rainSound.pause();
    });
    buttonRainOn_dark.addEventListener("click", function () {
        buttonRainOn_dark.classList.add("hide");
        buttonRainOff_dark.classList.remove("hide");
        sounds.rainSound.pause();
    })
}

    function ForestOn() {
    buttonFlorestOff.addEventListener("click", function () {
        buttonFlorestOn.classList.remove("hide");
        buttonFlorestOff.classList.add("hide");
        document.body.classList.add("white");
        sounds.florestSound.play();
    });
    buttonFlorestOff_dark.addEventListener("click", function () {
        buttonFlorestOn_dark.classList.remove("hide");
        buttonFlorestOff_dark.classList.add("hide");
        sounds.florestSound.play();
    });
}

    function ForestOff() {
    buttonFlorestOn.addEventListener("click", function () {
        buttonFlorestOn.classList.add("hide");
        buttonFlorestOff.classList.remove("hide");
        document.body.classList.remove("white");
        sounds.florestSound.pause();
    });
    buttonFlorestOn_dark.addEventListener("click", function () {
        buttonFlorestOn_dark.classList.add("hide");
        buttonFlorestOff_dark.classList.remove("hide");
        sounds.florestSound.pause();
    });
}
    function CoffeeOn() {
    buttonCoffeeOff.addEventListener("click", function () {
        buttonCoffeeON.classList.remove("hide");
        buttonCoffeeOff.classList.add("hide");
        document.body.classList.add("whiteee");
        sounds.coffeeSound.play();
    });
    buttonCoffeeOff_dark.addEventListener("click", function () {
        buttonCoffeeON_dark.classList.remove("hide");
        buttonCoffeeOff_dark.classList.add("hide");
        sounds.coffeeSound.play();
    });

}
    function CoffeeOff() {
    buttonCoffeeON.addEventListener("click", function () {
        buttonCoffeeON.classList.add("hide");
        buttonCoffeeOff.classList.remove("hide");
        document.body.classList.remove("whiteee");
        sounds.coffeeSound.pause();
    });
    buttonCoffeeON_dark.addEventListener("click", function () {
        buttonCoffeeON_dark.classList.add("hide");
        buttonCoffeeOff_dark.classList.remove("hide");
        sounds.coffeeSound.pause();
    });
}
    function FireOn() {
    buttonFireOff.addEventListener("click", function () {
        buttonFireOn.classList.remove("hide");
        buttonFireOff.classList.add("hide");
        document.body.classList.add("whiteeee");
        sounds.fireSound.play();
    });
    buttonFireOff_dark.addEventListener("click", function () {
        buttonFireOn_dark.classList.remove("hide");
        buttonFireOff_dark.classList.add("hide");
        sounds.fireSound.play();
    })
}
    function FireOff() {
    buttonFireOn.addEventListener("click", function () {
        buttonFireOn.classList.add("hide");
        buttonFireOff.classList.remove("hide");
        document.body.classList.remove("whiteeee");
        sounds.fireSound.pause();
    });
    buttonFireOn_dark.addEventListener("click", function () {
        buttonFireOn_dark.classList.add("hide");
        buttonFireOff_dark.classList.remove("hide");
        sounds.fireSound.pause();
    });
}
function voll(){
ForestVolumeSlider.addEventListener(`input`, () => {
    
});
}
    return {
    RainOn,
    RainOff,
    ForestOn,
    ForestOff,
    CoffeeOn,
    CoffeeOff,
    FireOn,
    FireOff,
    };
}

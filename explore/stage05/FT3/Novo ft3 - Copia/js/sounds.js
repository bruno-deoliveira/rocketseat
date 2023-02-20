export function Sounds() {
    const rainSound = new Audio("./assets/som/Chuva.wav");
    const florestSound = new Audio("./assets/som/Floresta.wav");
    const coffeeSound = new Audio("./assets/som/Cafeteria.wav");
    const fireSound = new Audio("./assets/som/Lareira.wav");
    const finishSound = new Audio("./assets/som/audios_kichen-timer.mp3");

    let ForestVolumeSlider = document.querySelector(".controlvolume1");
    let RainVolumeSlider = document.querySelector(".controlvolume2");
    let CoffeeVolumeSlider = document.querySelector(".controlvolume3");
    let FireVolumeSlider = document.querySelector(".controlvolume4");

    florestSound.loop = true;
    rainSound.loop = true;
    coffeeSound.loop = true;
    fireSound.loop = true;

    /*rainSound.volume = RainVolumeSlider;*/

return {
    florestSound,
    rainSound,
    coffeeSound,
    fireSound,
    finishSound,
    };
}

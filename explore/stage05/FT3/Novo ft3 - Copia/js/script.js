import { Sounds } from "./sounds.js";
import { SoundButton } from "./soundButton.js";
import { TimerSet } from "./timer.js";
import { Controls } from "./controls.js";


const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonMais = document.querySelector(".mais");
const buttonMenos = document.querySelector(".menos");

const buttonPlayD = document.querySelector(".playD");
const buttonStopD = document.querySelector(".stopD");
const buttonMaisD = document.querySelector(".maisD");
const buttonMenosD = document.querySelector(".menosD");

const buttonFlorestOn = document.querySelector(".forest_sound_on");
const buttonFlorestOff = document.querySelector(".forest_sound_off");
const buttonRainOn = document.querySelector(".rain_sound_on");
const buttonRainOff = document.querySelector(".rain_sound_off");

const buttonCoffeeON = document.querySelector(".coffee_sound_on");
const buttonCoffeeOff = document.querySelector(".coffee_sound_off");
const buttonFireOn = document.querySelector(".fire_sound_on");
const buttonFireOff = document.querySelector(".fire_sound_off");

const buttonFlorestOn_dark = document.querySelector(".forest_sound_on-2");
const buttonFlorestOff_dark = document.querySelector(".forest_sound_off-2");
const buttonRainOn_dark = document.querySelector(".rain_sound_on-2");
const buttonRainOff_dark = document.querySelector(".rain_sound_off-2");

const buttonCoffeeON_dark = document.querySelector(".coffee_sound_on-2");
const buttonCoffeeOff_dark = document.querySelector(".coffee_sound_off-2");
const buttonFireOn_dark = document.querySelector(".fire_sound_on-2");
const buttonFireOff_dark = document.querySelector(".fire_sound_off-2");

const minuteDisplay = document.querySelector(".minute");
const secondsDisplay = document.querySelector(".second");
let minute;
let second;
let timerTimeOut;

const baseColor = document.querySelector(".base");
const LightDark = document.querySelector(".light_dark");

const soundbutton = SoundButton({
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

});

const sounds = Sounds();

const timerset = TimerSet({
    minute,
    second,
    timerTimeOut,
    sounds,
    minuteDisplay,
    secondsDisplay,
    buttonStop,
    buttonStopD,
});

const controls = Controls({
    buttonPlay,
    buttonStop,
    buttonMenos,
    buttonMais,
    timerset,
    minute,
    minuteDisplay,
    buttonMaisD,
    buttonMenosD,
    buttonPlayD,
});

soundbutton.ForestOff();
soundbutton.ForestOn();

soundbutton.RainOff();
soundbutton.RainOn();

soundbutton.CoffeeOff();
soundbutton.CoffeeOn();

soundbutton.FireOn();
soundbutton.FireOff();;

controls.PlayButton();
controls.MaisButton();
controls.MenosButton();

timerset.StopButton();

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        timerset.ResetTimer();
    }
});

LightDark.addEventListener("click", function () {
    baseColor.classList.toggle("dark")
});

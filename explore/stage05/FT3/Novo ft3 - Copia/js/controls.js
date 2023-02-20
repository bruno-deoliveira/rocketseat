export function Controls({
    buttonPlay,
    buttonMenos,
    buttonMais,
    timerset,
    minute,
    minuteDisplay,
    buttonMaisD,
    buttonMenosD,
    buttonPlayD,
}) {
    function PlayButton() {
        buttonPlay.addEventListener("click", function () {
            timerset.countdown();
    });
        buttonPlayD.addEventListener("click", function () {
            timerset.countdown();
    });
}

    function MenosButton() {
    buttonMenos.addEventListener("click", function () {
        minute = Number(minuteDisplay.textContent);
        minuteDisplay.textContent = String(minute - 5).padStart(2, 0);
    })
    buttonMenosD.addEventListener("click", function () {
        minute = Number(minuteDisplay.textContent);
        minuteDisplay.textContent = String(minute - 5).padStart(2, 0);
    });
}

    function MaisButton() {
    buttonMais.addEventListener("click", function () {
        minute = Number(minuteDisplay.textContent);
        minuteDisplay.textContent = String(minute + 5).padStart(2, 0);
    });
    buttonMaisD.addEventListener("click", function () {
        minute = Number(minuteDisplay.textContent);
        minuteDisplay.textContent = String(minute + 5).padStart(2, 0);
    });
}

    return {
    PlayButton,
    MenosButton,
    MaisButton,
    };
}

export function TimerSet({
    minute,
    second,
    timerTimeOut,
    sounds,
    minuteDisplay,
    secondsDisplay,
    buttonStop,
    buttonStopD,
}) {
    function countdown() {
        timerTimeOut = setTimeout(function () {
        let segundos = Number(secondsDisplay.textContent);
        let minutos = Number(minuteDisplay.textContent);

        secondsDisplay.textContent = "00";

        if (minutos <= 0 && segundos <= 0) {
        sounds.finishSound.play();

        ResetTimer();

        return;
        } else if (segundos <= 0) {
        segundos = 60;

        --minutos;
        }
        secondsDisplay.textContent = String(segundos - 1).padStart(2, 0);
        minuteDisplay.textContent = String(minutos).padStart(2, 0);

        countdown();
    }, 1000);
}

    function StopButton() {
        buttonStop.addEventListener("click", function () {
        clearTimeout(timerTimeOut);
    });
        buttonStopD.addEventListener("click", function () {
        clearTimeout(timerTimeOut);
    });
}

    function ResetTimer() {
        minute = 0;
        second = 0;

        secondsDisplay.textContent = String(second).padStart(2, 0);
        minuteDisplay.textContent = String(minute).padStart(2, 0);
}

    return {
    countdown,
    ResetTimer,
    StopButton,
    };
}

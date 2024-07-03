let timerInterval;
let startTime;
let currentTime;
let isRunning = false;

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
document.getElementById('restart-btn').addEventListener('click', restartTimer);

function startTimer() {
    startTime = parseInt(document.getElementById('time-input').value);
    currentTime = startTime;
    isRunning = true;

    timerInterval = setInterval(() => {
        currentTime--;
        updateTimerDisplay();
        if (currentTime <= 0) {
            clearInterval(timerInterval);
            isRunning = false;
        }
    }, 1000);

    document.getElementById('start-btn').disabled = true;
    document.getElementById('stop-btn').disabled = false;
    document.getElementById('reset-btn').disabled = false;
    document.getElementById('restart-btn').disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;

    document.getElementById('start-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
    document.getElementById('reset-btn').disabled = false;
    document.getElementById('restart-btn').disabled = false;
}

function resetTimer() {
    currentTime = startTime;
    updateTimerDisplay();

    document.getElementById('start-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
    document.getElementById('reset-btn').disabled = true;
    document.getElementById('restart-btn').disabled = false;
}

function restartTimer() {
    if (!isRunning) {
        startTimer();
    }
}

function updateTimerDisplay() {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    let displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer-display').innerText = displayTime;
}
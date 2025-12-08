let seconds = 30;
let delay = 5;
const display = document.getElementById('display');
const task = document.getElementById('task');
const countdown = document.getElementById('countdown');

document.querySelectorAll('.timer').forEach(button => {
    button.addEventListener('click', startDelay)});

function startDelay() {
    countdown.classList.remove('d-none');
        task.classList.add('d-none');
        button.disabled = true;
        display.textContent = `${delay}s`;
        const pretime = setInterval(() => {
            delay--;
            display.textContent = `${delay}s`;

            if (delay <= 0) {
                startTimer();
            };

        },1000);
};

function startTimer() {

    const interval = setInterval(() => {
            seconds--;
            display.textContent = `${seconds}s`;

            if (seconds <= 0) {
                clearInterval(interval);
                button.textContent = originalText + "✅";
                button.disabled = false;
                task.classList.remove('d-none');
                countdown.classList.add('d-none');
            };

        },1000);

}

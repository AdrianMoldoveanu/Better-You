document.querySelectorAll('.timer').forEach(button => {
    button.addEventListener('click', function () {
        let seconds = 30;
        const display = document.getElementById('display');
        const task = document.getElementById('task');
        const countdown = document.getElementById('countdown');
        countdown.classList.remove('d-none');
        task.classList.add('d-none');
        display.textContent = `${seconds}s`;
        button.disabled = true;
        const originalText = button.textContent;
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

        }, 1000);
    });
});
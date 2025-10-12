document.querySelectorAll('.timer').forEach(button => {
    button.addEventListener('click', function () {
        let seconds = 30;
        button.disabled = true;
        const originalText = button.textContent;
        button.textContent = `${seconds}s`;

        const interval = setInterval(() => {
            seconds--;
            button.textContent = `${seconds}s`;
            if (seconds <= 0) {
                clearInterval(interval);
                button.textContent = originalText;
                button.disabled = false;
            }
        }, 1000);
    });
});
document.querySelectorAll('.timer').forEach(button => {
    button.addEventListener('click', function () {
        let seconds = 30;
        button.disabled = true;
        button.classList.add('vh-100');
        button.style.color = 'red';
        button.style.backgroundColor = 'black';
    button.style.fontSize = '9rem';
        const originalText = button.textContent;
        button.textContent = `${seconds}s`;
       
        const interval = setInterval(() => {
            seconds--;
            button.textContent = `${seconds}s`;
            if (seconds <= 0) {
                clearInterval(interval);
                button.textContent = originalText;
                button.classList.remove('vh-100')
                button.disabled = false;
            }
        }, 1000);
    });
});
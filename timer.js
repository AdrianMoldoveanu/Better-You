document.querySelectorAll('.timer').forEach(button => {
    button.addEventListener('click', function () {
        let seconds = 10;
        button.disabled = true;
        button.classList.add('vh-100');
        button.classList.add('vw-100');
        button.style.color = '#0ef506ff';
        button.style.backgroundColor = 'black';
    button.style.fontSize = '7rem';
        const originalText = button.textContent;
        button.textContent = `${seconds}s`;
       
        const interval = setInterval(() => {
            seconds--;
            button.textContent = `${seconds}s`;
            if (seconds <= 0) {
                clearInterval(interval);
                button.textContent = 'Done✔';
                button.style.backgroundColor = 'black';
                button.style.fontSize = '1.5rem';
                button.classList.remove('vh-100');
                button.classList.remove('vw-100');
                button.disabled = false;
            }
        }, 1000);
    });
});
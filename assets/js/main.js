document.addEventListener('DOMContentLoaded', () => {
    // Range input value display
    const timeInput = document.getElementById('time');
    const timeOutput = document.querySelector('output[for="time"]');
    
    if (timeInput && timeOutput) {
        timeInput.addEventListener('input', () => {
            timeOutput.textContent = `${timeInput.value}:00`;
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

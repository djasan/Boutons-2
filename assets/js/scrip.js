document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const windows = document.querySelectorAll('.window');
    let currentWindow = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetWindowId = this.getAttribute('data-target');
            const targetWindow = document.getElementById(targetWindowId);

            if (currentWindow) {
                currentWindow.style.display = 'none';
                currentWindow.classList.remove('active');
            }

            if (currentWindow !== targetWindow) {
                targetWindow.style.display = 'block';
                targetWindow.classList.add('active');
                currentWindow = targetWindow;
            } else {
                currentWindow = null;
            }
        });
    });
});




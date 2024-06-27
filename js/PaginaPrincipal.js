document.addEventListener('DOMContentLoaded', function () {
    const checkBtn = document.querySelector('.check-btn');
    const navMenu = document.querySelector('nav');

    checkBtn.addEventListener('change', function () {
        if (this.checked) {
            navMenu.style.display = 'block';
        } else {
            navMenu.style.display = 'none';
        }
    });
});



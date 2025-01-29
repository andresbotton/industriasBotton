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

document.getElementById("copyright-year").textContent =
    new Date().getFullYear();

window.addEventListener("beforeunload", function (event) {
    localStorage.clear();
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector("body").classList.add("loaded");
    }, 500);
});

window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;

    // Calculate the parallax effect (adjust these values for different speeds)
    var backgroundOffset = scrollY * 0.2;
    var layerOffset = scrollY * 0.4;

    // Apply the offset to the background and layer elements
    document.querySelector('.background').style.transform = 'translateY(' + backgroundOffset + 'px)';
    document.querySelector('.layer').style.transform = 'translateY(' + layerOffset + 'px)';
});
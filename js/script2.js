window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;

    // Calculate the parallax effect (adjust these values for different speeds)
    var backgroundOffset = scrollY * 0.2;
    var layerOffset = scrollY * 0.4;

    // Apply the offset to the background and layer elements
    document.querySelector('.background').style.transform = 'translateY(' + backgroundOffset + 'px)';
    document.querySelector('.layer').style.transform = 'translateY(' + layerOffset + 'px)';
});

(function(){
    
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');

    }

})();
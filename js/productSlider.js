// product slider2

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

let slider = document.getElementById('container-book');


buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 265;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 265;
})
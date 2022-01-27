// product slider2

// var sliderId=["container-book1","container-book2","container-book3"];

let slider = document.getElementsByClassName("slid-section");
let viewallSection = document.getElementsByClassName('section-container');


console.log(viewallSection);

function leftScrol(no){

    slider[no].scrollLeft -= 265;
}
function rightScrol(no){
    slider[no].scrollLeft += 265;
}
function viewAll(no){

    slider[no].style.display = "none";

// slider[no].classList.add('flex-wrap');
}
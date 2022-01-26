


  /* Slider */
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  
// /*  timer */
setInterval( ()=>{

  const DueDate = new Date('jan 30,2022 00:00:00').getTime();
  const currentDate = new Date().getTime();
  const diff = DueDate - currentDate;


  let sec = 1000;
  let min = sec * 60;
  let hou = min * 60;
  let day = hou * 24;

  let remainDay = Math.floor(diff/day);
  let remainHour = Math.floor((diff%day)/hou);
  let remainMin = Math.floor((diff%hou)/min);
  let remainSec = Math.floor((diff%min)/sec);

  var d = document.getElementById("days");
  var h = document.getElementById("hours"); 
  var m = document.getElementById("minut"); 
  var s = document.getElementById("second");

  
  d.innerHTML = remainDay;
  h.innerHTML = remainHour;
  m.innerHTML = remainMin;
  s.innerHTML = remainSec;

},1000);




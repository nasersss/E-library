/* navbar*/
function myFunction() {
    var x = document.getElementById("nav-bar-list");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }



  /* Slider */

  const imageSlider = document.querySelectorAll('.slider img');

  console.log (imageSlider);
  //Get slider button

  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  let sliderCount = 0 ;

  next.addEventListener('click',()=>{
    imageSlider[sliderCount].style.animationName = 'firstNext';
    
    if(sliderCount >=imageSlider.length-1){

      sliderCount=0;
    }
    else{
      sliderCount++;
    }
    imageSlider[sliderCount].style.animationName = 'second';

  });

  // prev

  prev.addEventListener('click',()=>{
    imageSlider[sliderCount].style.animationName = 'firstPrev';
    
    if(sliderCount=== 0){
      sliderCount = imageSlider.length-1;
    }
    else{
      sliderCount--;
    }
    imageSlider[sliderCount].style.animationName = 'secondPrev';

  });

  
/*  timer */
setInterval( ()=>{

  const DueDate = new Date('jan 22,2022 00:00:00').getTime();
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




/* pop rigister and login */

const modalBtn = document.querySelector('#modal-btn');
const loginBtn = document.querySelector('#login-btn');
const registBtn = document.querySelector('#register-btn');
const closeBtn = document.querySelector('.close');


const modal = document.getElementById("modal");
const login = document.querySelector(".login");
const regis = document.querySelector(".register");
// Events

modalBtn.addEventListener('click', openModal);
loginBtn.addEventListener('click', openlogin);
registBtn.addEventListener('click', openRegist);

closeBtn.addEventListener('click', closModal);


//Method

// Open
function openModal() {
 modal.style.display = 'flex';
 
}

//open login form
function openlogin(){
  login.style.display = "block";  
  regis.style.display = "none";
  


}

//open rigist form

function openRegist(){
  regis.style.display = "block";  
  login.style.display = "none";
}

// Close
function closModal() {
 modal.style.display = 'none';
}

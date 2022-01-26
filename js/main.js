/* navbar*/
function myFunction() {
    var x = document.getElementById("nav-bar-list");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }


/*Filtering product by search box in category page */
const searchFunc = () =>{

  let filter =document.getElementById("Myinput").value;
  let boxFilter = document.getElementById("container-book");
  let allproduct = boxFilter.getElementsByClassName('items');
  
      for(var i = 0 ;i<allproduct.length;i++){
  
          let title = allproduct[i].getElementsByTagName("h6")[0];
          let name = allproduct[i].getElementsByClassName("name-book")[0];
  
          if(title || name){
              let titlText = title.textContent || title.innerHTML;
              let nameText = name.textContent || name.innerHTML;
              if((titlText.indexOf(filter) > -1) || nameText.indexOf(filter) > -1 ){
                  allproduct[i].style.display  =  "";
          }
          else{
              allproduct[i].style.display ="none";
          }
  
          }         
      }
  
  }

/* pop rigister and login */

const closeBtn = document.querySelector('.close');

const modal = document.getElementById("modal");
const login = document.querySelector(".login");
const regis = document.querySelector(".register");
// Events

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

// When the user clicks anywhere outside of the modal, close it
//modal.addEventListener("click",closModal);
function closModal() {
 modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// **********
// pyment step
// **********


// Change language

let lang = document.getElementById('lang');
let body = document.getElementById('body');

lang.addEventListener('click',function(){

 let langstyle=body.getAttribute('class');
 

  if(langstyle=='bodyAR')
          {
           body.classList.remove("bodyAR");
          body.classList.add("bodyEN");
          lang.innerHTML=`<span><i class="fas fa-language"></i> </span> عربي`;
        }
  else{
      body.classList.add("bodyAR");
      body.classList.remove("bodyEN");
      lang.innerHTML=`<span><i class="fas fa-language"></i> </span> English`;
    }
  
});
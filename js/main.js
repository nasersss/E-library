function myFunction() {
    var x = document.getElementById("nav-bar-list");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
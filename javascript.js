const header = document.querySelector("header");

window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

 // JavaScript code
 function toggleExtraContent() {
    var extraContent = document.getElementById("extra-content");
    
    if (extraContent.classList.contains("hidden")) {
      extraContent.classList.remove("hidden");
      extraContent.classList.add("show");
    } else {
      extraContent.classList.remove("show");
      extraContent.classList.add("hidden");
    }
  }
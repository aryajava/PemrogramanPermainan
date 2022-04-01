//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Zoom Image
window.onload = () => {
  // (A) GET ALL IMAGES
  let all = document.getElementsByClassName("zoom-img");

  // (B) CLICK TO GO FULLSCREEN
  if (all.length > 0) {
    for (let i of all) {
      i.onclick = () => {
        // (B1) EXIT FULLSCREEN
        if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
          if (document.exitFullscreen) { document.exitFullscreen(); }
          else { document.webkitCancelFullScreen(); }
        }

        // (B2) ENTER FULLSCREEN
        else {
          if (i.requestFullscreen) { i.requestFullscreen(); }
          else { i.webkitRequestFullScreen(); }
        }
      };
    }
  }
};
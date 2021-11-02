// This script is for styling the exhibit group btns based on what which is clicked, this will be used for checking the exhibit page URL
export function styleExhibitBtns(btn) {
  var i;
  const allBtns = document.getElementsByClassName("exhibit-group-btn");

  for (i = 0; i < allBtns.length; i++) {
    allBtns[i].style.opacity = "1";
    allBtns[i].style.pointerEvents = "auto";
  }

  setTimeout(() => {
    btn.style.opacity = "0.5";
    btn.style.pointerEvents = "none";
  }, 30);
}

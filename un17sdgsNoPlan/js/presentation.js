// initailize global values for slides
let slides = {};
let itemNum = 1;
 
function init() {
  // get slide count and button elements
  slides.slides = document.querySelectorAll("section");
  slides.count = slides.slides.length;
  slides.current = 0;
  slides.lBtn = document.querySelector("#left-btn");
  slides.rBtn = document.querySelector("#right-btn");

  // handle clicks on left and right icons
  slides.lBtn.addEventListener("click", prevSlide);
  slides.rBtn.addEventListener("click", nextSlide);

  // hide left button and display first slide 
  slides.lBtn.style.visibility = "hidden";
  setSlideNum();
  slides.slides[slides.current].style.display = "block";
}

function nextSlide() {
  let lastSlide = slides.current;
  if (slides.current < slides.count-1) {
    slides.current++;
    slides.lBtn.style.visibility = "visible";
    if (slides.current == slides.count-1)
      slides.rBtn.style.visibility = "hidden";
    setSlideNum();
    slides.slides[lastSlide].style.display = "none";
    slides.slides[slides.current].style.display = "block";
  }
}

function prevSlide() {
  let lastSlide = slides.current;
  if (slides.current > 0) {
    slides.current--;
    slides.rBtn.style.visibility = "visible";
    if (slides.current == 0) slides.lBtn.style.visibility = "hidden";
    setSlideNum();
    slides.slides[lastSlide].style.display = "none";
    slides.slides[slides.current].style.display = "block";
  }
}

function setSlideNum() {
  const slideNoDisplay = document.getElementById("counter");
  slideNoDisplay.innerText = `${slides.current+1} of ${slides.count}`;
}

function nextItem() {
  let listItemId = "noplan" + itemNum;
  let listItem = document.getElementById(listItemId);
  listItem.style.visibility = "visible";
  itemNum++;
}

// add keyboard navigation  See:
// https://www.toptal.com/developers/keycode
// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 39 || e.keyCode == 32)  // right-arrow or space bar pressed 
    nextSlide();
  else if (e.keyCode == 37)                // left-arrow key pressed
    prevSlide();
  else if (e.keyCode == 82)                // "r" key pressed
    nextItem();
});

window.onload = init;

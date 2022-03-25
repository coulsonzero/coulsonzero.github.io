import setTime from "./assets/js/setTime.js";
import setBackground from "./assets/js/setBackground.js";
import setTheme from "./assets/js/setTheme.js";
import scrollHeader from "./assets/js/scrollHeader.js";
import scrollActive from "./assets/js/scrollActive.js";
import scrollReveal from "./assets/js/scrollReveal.js";
import setActiveSlider from "./assets/js/setActiveSlider.js";
import getSlider from "./assets/js/getSlider.js";
import setSwiper from "./assets/js/setSwiper.js";
import setImgToggle from "./assets/js/setImgToggle.js";
import setHttp from "./assets/js/setHttp.js";


// setInterval(setTime, 1000);

setBackground();

setTheme();

window.addEventListener("scroll", scrollHeader);
window.addEventListener("scroll", scrollActive);

scrollReveal();

setActiveSlider();


setSwiper();

// setImgToggle(getSlider());
setImgToggle();

setHttp("GET", "assets/json/links.json");


/*
// Grid demo
const gridLinks = document.querySelector(".about-links");
new Sortable(gridLinks, {
	animation: 500,
	ghostClass: 'blue-background-class'
});
*/
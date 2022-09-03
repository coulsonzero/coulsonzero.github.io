import setAboutLinks from "./assets/js/setAboutLinks.js"
import setTime from "./assets/js/setTime.js"
import setBackground from "./assets/js/setBackground.js"
import setTheme from "./assets/js/setTheme.js"
import scrollHeader from "./assets/js/scrollHeader.js"
import scrollActive from "./assets/js/scrollActive.js"
import scrollReveal from "./assets/js/scrollReveal.js"
import setActiveSlider from "./assets/js/setActiveSlider.js"
import getSlider from "./assets/js/getSlider.js"
import setSwiper from "./assets/js/setSwiper.js"
import setImgToggle from "./assets/js/setImgToggle.js"
import setHttp from "./assets/js/setHttp.js"
import cookieBtn from "./assets/js/cookieBtn.js"
import mouseNav from "./assets/js/mouseNav.js"

document.body.classList.remove("dark-theme")
// setInterval(setTime, 1000);


setBackground()

setTheme()

window.addEventListener("scroll", scrollHeader)
window.addEventListener("scroll", scrollActive)
document.addEventListener("mousewheel", mouseNav, false)
// scrollReveal()

setActiveSlider()

setSwiper()

setImgToggle(getSlider())
setImgToggle()

setHttp("GET", "assets/json/links.json")
setAboutLinks()
/*
// Grid demo
const gridLinks = document.querySelector(".about-links");
new Sortable(gridLinks, {
	animation: 500,
	ghostClass: 'blue-background-class'
});
*/

cookieBtn()


/**********************
 *   sessionStorage   *
 **********************/

// const info = window.navigator.appVersion.split(" ")
// const pc_info = info[3] + info[4]
// const browser_info = info[info.length - 2].split("/")[0]
// console.log(pc_info)
// console.log(browser_info)
// console.log(window)

// window.sessionStorage["user_name"] = "coulsonzero"
// window.sessionStorage["pc_info"] = pc_info
// window.sessionStorage["browser_info"] = browser_info



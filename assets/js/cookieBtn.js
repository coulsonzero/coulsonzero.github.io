
const cookie_container = document.querySelector(".cookies")
const cookie_button = document.querySelector(".cookies .ok-btn")


function cookieBtn() {
    cookie_button.addEventListener("click", () => {
        // cookie_container.classList.add("cookie-hidden")
        cookie_container.classList.add("fade-out-bottom")
    })
}

export default cookieBtn
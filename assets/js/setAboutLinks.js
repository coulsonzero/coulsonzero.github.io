const setAboutLinks = () => {
	const tabs = document.querySelectorAll(".tabs-container input")
	const tabLinks = document.querySelectorAll(".about-wrapper .about-links")

	for (let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("change", () => {
			if (tabs[i].checked) {
				tabLinks.forEach((link) => link.classList.add("hidden"))
				tabLinks[i].classList.remove("hidden")
			}
		})
	}

	const noti = document.querySelectorAll(".notification")
	if(noti) {
		tabLinks.forEach((v, i) => {
			setTimeout(() => {
				// console.log(v.children.length)
				noti[i].innerHTML = v.children.length
			}, 300)
		})
	}
}

export default setAboutLinks
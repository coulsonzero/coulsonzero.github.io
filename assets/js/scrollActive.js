/*=============== 滚动页面 header links 切换active  ===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
	const scrollY = window.pageYOffset

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 58
		const sectionId = current.getAttribute("id")
		const condition =
			scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
		document
			.querySelector(".navbar a[href*=" + sectionId + "]")
			.classList[condition ? "add" : "remove"]("active")
	})
}

export default scrollActive

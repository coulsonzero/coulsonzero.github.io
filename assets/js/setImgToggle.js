function setImgToggle() {
	let imgsBox = []
	let imgBtn = document.querySelectorAll(".img-btn")
	imgBtn.forEach((v) => imgsBox.push(v.getAttribute("data-src")))

	/* ============ 图片左右切换按钮事件 =========== */
	var i = 0

	function next() {
		setTimeout(function () {
			document.querySelector(".img-btn.active").classList.remove("active")
			i++
			if (i >= imgsBox.length) i = 0
			document.querySelectorAll(".img-btn")[i].classList.add("active")
			document.querySelector(".img-slider").src = imgsBox[i]
		}, 100)
	}

	function prev() {
		setTimeout(function () {
			document.querySelector(".img-btn.active").classList.remove("active")
			i--
			if (i < 0) i = imgsBox.length - 1
			document.querySelectorAll(".img-btn")[i].classList.add("active")

			document.querySelector(".img-slider").src = imgsBox[i]
		}, 100)

	}

	const prevBtn = document.querySelector(".swiper-button-prev")
	const nextBtn = document.querySelector(".swiper-button-next")

	prevBtn.addEventListener("click", prev, false)
	nextBtn.addEventListener("click", next, false)
}

export default setImgToggle

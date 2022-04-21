/* ========== 获取所有图片 ========= */

function getSlider() {
	let imgsBox = []
	const imgBtn = document.querySelectorAll(".img-btn")
	imgBtn.forEach((v) => imgsBox.push(v.getAttribute("data-src")))
	return imgsBox
}

export default getSlider

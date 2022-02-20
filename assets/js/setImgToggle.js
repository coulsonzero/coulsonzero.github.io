const setImgToggle = (imgsBox) => {
	/* ============ 图片左右切换按钮事件 =========== */
	var i = 0;
	let imgBtn = document.querySelectorAll(".img-btn");

	function next() {
		document.querySelector(".img-btn.active").classList.remove("active");
		i++;
		if (i >= imgsBox.length) i = 0;
		document.querySelectorAll(".img-btn")[i].classList.add("active");
		document.querySelector(".img-slider").src = imgsBox[i];
	}

	function prev() {
		document.querySelector(".img-btn.active").classList.remove("active");
		i--;
		if (i < 0) i = imgsBox.length - 1;
		document.querySelectorAll(".img-btn")[i].classList.add("active");
		document.querySelector(".img-slider").src = imgsBox[i];
	}

	const prevBtn = document.querySelector(".swiper-button-prev");
	const nextBtn = document.querySelector(".swiper-button-next");

	prevBtn.addEventListener("click", prev);
	nextBtn.addEventListener("click", next);
}

export default setImgToggle
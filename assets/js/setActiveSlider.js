/* ============ Home 图片初始化 ========== */
const setActiveSlider = () => {
	const imgSlider = document.querySelector(".img-slider");
	const activeSlider = document.querySelector(".img-btn.active");

	imgSlider.src = activeSlider.getAttribute("data-src");
};

export default setActiveSlider;
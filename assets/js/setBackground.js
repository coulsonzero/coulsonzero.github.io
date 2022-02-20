/*=============== Home 图片分页器 ===============*/
const setBackground = () => {
	let imgBtn = document.querySelectorAll(".img-btn");
	imgBtn.forEach((btn) => {
		btn.addEventListener("click", () => {
			document.querySelector(".img-btn.active").classList.remove("active");
			btn.classList.add("active");
			document.querySelector(".img-slider").src = btn.getAttribute("data-src");
		});
	});
};

export default setBackground;

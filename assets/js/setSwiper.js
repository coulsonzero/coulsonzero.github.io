const setSwiper = () => {
	/* ============= 图片切换按钮悬浮事件 ============= */
	const swiperPagination = document.querySelector(".swiper-pagination")
	const swiperButton = document.querySelectorAll(".swiper-button")
	swiperButton.forEach((item) => {
		item.addEventListener("mouseenter", () => {
			swiperPagination.classList.add("active")
		})
		item.addEventListener("mouseleave", () => {
			swiperPagination.classList.remove("active")
		})
	})
}

export default setSwiper

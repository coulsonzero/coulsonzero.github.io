/*=============== 滚动页面 header 阴影 ===============*/
function scrollHeader() {
	const header = document.getElementById("header");
	// if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
	// this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
	header.classList[this.scrollY >= 50 ? "add" : "remove"]("scroll-header");
	// const darkHeader = document.querySelector('.dark-theme .header')
	// darkHeader.classList[this.scrollY >= 800 ? 'add' : 'remove']('is-active')
	header.classList[
		document.body.classList.contains("dark-theme") && this.scrollY >= 520
			? "add"
			: "remove"
	]("is-active");
}

export default scrollHeader

function mouseNav(e) {
    const header = document.getElementById("header")
	if (e.wheelDelta) {
		// if (e.wheelDelta > 0) {
		// 	console.log("鼠标向上滚动了")
		// } else {
		// 	console.log("鼠标向下滚动了")
		// }

        header.classList[e.wheelDelta > 0 ? "remove" : "add"]("header-hidden")
	}
}


export default mouseNav
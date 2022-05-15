import getJsonData2 from "./getJsonData2.js"

function setHttp(type, url) {
	// Ajax获取json数据
	const jsonhttp = new XMLHttpRequest()
	jsonhttp.onload = function () {
		if (this.readyState == 4 && this.status == 200) {
			// json数据处理
			getJsonData2(jsonhttp)
		}
	}
	jsonhttp.open(type, url)
	jsonhttp.send()
}

export default setHttp

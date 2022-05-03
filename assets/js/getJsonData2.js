function getJsonData2(jsonhttp) {
	const obj = JSON.parse(jsonhttp.responseText)
	const APP = document.querySelectorAll(".about-wrapper .about-links")


    APP.forEach((v, i) => {
        let content = ""
        obj.links[i].forEach((item) => {
					content += `
        <a href="${item.url}" target="_blank"
			class="${obj.linkClassName}">
			<img src="${obj.imgPath}${item.fileName}"
				alt="${item.title.toLowerCase()}"
				class="link-img"
			/>
            <span class="link-title">${item.title}</span>
        </a>
        `
		})
        APP[i].innerHTML = content
    })


}

export default getJsonData2

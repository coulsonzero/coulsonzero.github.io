// Ajax获取json数据
const jsonhttp = new XMLHttpRequest();
jsonhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        // json数据处理
        getJsonData(jsonhttp)
    }
};
jsonhttp.open("GET", "assets/json/links.json");
jsonhttp.send();

// json数据处理方法
const getJsonData = (jsonhttp) => {
    const obj = JSON.parse(jsonhttp.responseText);
    // 数据挂载
    const APP = document.querySelector(obj.target)
    let content = ''
    for(let i = 0; i < obj.link.length; i++) {
        content += `
        <a href="${obj.link[i].url}" target="_blank" class="${obj.linkClassName}">
            <img src="${obj.imgPath}${obj.link[i].fileName}" alt="${obj.link[i].title.toLowerCase()}" class="link-img"/>
            <span class="link-title">${obj.link[i].title}</span>
        </a>
        `
    }
    // 数据挂载
    APP.innerHTML = content
}
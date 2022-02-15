/*=============== Change Theme ===============*/
const themeChange = () => {
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}

themeChange();

/*=============== 滚动页面 header 阴影 ===============*/


function scrollHeader() {
    const header = document.getElementById('header')
    // if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    // this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
    header.classList[this.scrollY >= 50 ? 'add' : 'remove']('scroll-header')
    // const darkHeader = document.querySelector('.dark-theme .header')
    // darkHeader.classList[this.scrollY >= 800 ? 'add' : 'remove']('is-active')
    header.classList[document.body.classList.contains('dark-theme') && this.scrollY >= 520 ? 'add' : 'remove']('is-active')
}

window.addEventListener('scroll', scrollHeader)


/*=============== 滚动页面 header links 切换active  ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const condition = scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
        document.querySelector('.navbar a[href*=' + sectionId + ']').classList[condition ? 'add' : 'remove']('active')
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1600,
    delay: 200,
    // reset: true
})


sr.reveal(`.nav .logo span`, {
        origin: 'left',
        delay: 200,
    })
    // sr.reveal(`.navbar li`, { origin: 'left', interval: 100 })
sr.reveal(`.main section div`, { origin: 'top' })
sr.reveal(`.about-links a`, {origin: "left", interval: 100, dalay: 200});
sr.reveal(`.footer`, {
    origin: 'right',
    dalay: 200,
    interval: 100
})

/*=============== Home 图片分页器 ===============*/
const changeBg = () => {
    let imgBtn = document.querySelectorAll('.img-btn')
    imgBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.img-btn.active').classList.remove('active')
            btn.classList.add('active')
            document.querySelector(".img-slider").src = btn.getAttribute('data-src')
        })
    })
}

changeBg();

/* ========== Home 图片初始化 ========== */
document.querySelector(".img-slider").src = document.querySelector(".img-btn.active").getAttribute('data-src');

/* ========== 获取所有图片 ========= */
let imgsBox = [];
document.querySelectorAll('.img-btn').forEach(v => imgsBox.push(v.getAttribute('data-src')));

/* ============ 图片左右切换按钮事件 =========== */
var i = 0
let imgBtn = document.querySelectorAll('.img-btn')

function next() {
    document.querySelector('.img-btn.active').classList.remove('active')
    i++
    if (i >= imgsBox.length) i = 0
    document.querySelectorAll('.img-btn')[i].classList.add('active')
    document.querySelector(".img-slider").src = imgsBox[i]
}

function prev() {
    document.querySelector('.img-btn.active').classList.remove('active')
    i--
    if (i < 0) i = imgsBox.length - 1
    document.querySelectorAll('.img-btn')[i].classList.add('active')
    document.querySelector(".img-slider").src = imgsBox[i]
}

const prevBtn = document.querySelector('.swiper-button-prev')
const nextBtn = document.querySelector('.swiper-button-next')

prevBtn.addEventListener('click', prev)
nextBtn.addEventListener('click', next)


/* ============= 图片切换按钮悬浮事件 ============= */
const swiperPagination = document.querySelector(".swiper-pagination")
const swiperButton = document.querySelectorAll('.swiper-button')
swiperButton.forEach(item => {
    item.addEventListener("mouseenter", () => {
		swiperPagination.classList.add("active");
	});
    item.addEventListener("mouseleave", () => {
        swiperPagination.classList.remove("active");
    });
})
/* ========== datetime ========== */

const updateTime = () => {
    var d = new Date();
    const datetime = document.querySelector(".icons .datetime");
    datetime.innerHTML = d.toTimeString().substring(0, 5)
}
setInterval(updateTime, 1000);

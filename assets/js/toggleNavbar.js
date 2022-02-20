const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const menuToggle = document.querySelector(".menuToggle");
const toggleMenu = () => {
    navbar.classList.toggle('showmenu')
    menuToggle.classList[navbar.classList.contains('showmenu') ? 'add' : 'remove']('active')
};
navToggle.addEventListener("click", toggleMenu);



const removeMenu = () => {
    navbar.classList.remove('showmenu')
    menuToggle.classList.remove("active")
}
navLinks = document.querySelectorAll('.navbar li a')
navLinks.forEach(link => {
    link.addEventListener("click", removeMenu);
});

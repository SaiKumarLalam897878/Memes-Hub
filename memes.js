// navbar header background color visible after scroll down
const showNavbar = document.querySelector(".navbar");
window.addEventListener('scroll', () => {
    showNavbar.classList.toggle('show__background', window.scrollY > 100);
});


//small devices navbar

const headerLinks = document.querySelectorAll(".header__link");
const hamMenu = document.querySelector('.ham__menu');
const hamMenuBar = document.querySelector('.ham__menu-bar');
const headerUl = document.querySelector('.header__links');

hamMenu.addEventListener("click", () => {
    hamMenuBar.classList.toggle('fa-xmark');
    headerUl.classList.toggle("ul__show");
})
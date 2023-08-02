// navbar header background color visible after scroll down
const showNavbar = document.querySelector(".navbar");
window.addEventListener('scroll', () => {
    showNavbar.classList.toggle('show__background', window.scrollY > 100);
});
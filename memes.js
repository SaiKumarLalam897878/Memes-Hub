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

for (let i = 0; i < headerLinks.length; i++){
    headerLinks[i].addEventListener('click', () => {
        hamMenuBar.classList.toggle("fa-xmark");
        headerUl.classList.toggle('ul__show');
    })
}



//
const menuSpecial1 = document.getElementById('menuSpecial1');
const menuSpecial2 = document.getElementById('menuSpecial2');
const menuSpecial3 = document.getElementById('menuSpecial3');

menuSpecial1.classList.add('border-bottom');

menuSpecial1.addEventListener("click", () => {
    menuSpecial1.classList.add('border-bottom');
    menuSpecial2.classList.remove('border-bottom');
    menuSpecial3.classList.remove('border-bottom');
})

menuSpecial2.addEventListener("click", () => {
    menuSpecial1.classList.remove('border-bottom');
    menuSpecial2.classList.add('border-bottom');
    menuSpecial3.classList.remove('border-bottom');
})

menuSpecial3.addEventListener("click", () => {
    menuSpecial1.classList.remove('border-bottom');
    menuSpecial2.classList.remove('border-bottom');
    menuSpecial3.classList.add('border-bottom');
})

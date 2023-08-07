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



//adding menu bar background styles when it was active

const menuSpecial1 = document.getElementById('menuSpecial1');
const menuSpecial2 = document.getElementById('menuSpecial2');
const menuSpecial3 = document.getElementById('menuSpecial3');
const arrow = document.querySelector('.arrow');
const menuBarSection1 = document.getElementById('menuBarSection1');
const menuBarSection2 = document.getElementById('menuBarSection2');
const menuBarSection13 = document.getElementById('menuBarSection3');

menuSpecial1.classList.add('border-bottom');

menuSpecial1.addEventListener("click", () => {
    menuSpecial1.classList.add('border-bottom');
    menuSpecial2.classList.remove('border-bottom');
    menuSpecial3.classList.remove('border-bottom');

    arrow.classList.remove('arrow_2', 'arrow_3');
    arrow.classList.add('arrow_1');

    menuBarSection1.classList.remove('d-none');
    menuBarSection2.classList.add('d-none');
    menuBarSection3.classList.add('d-none');
})

menuSpecial2.addEventListener("click", () => {
    menuSpecial1.classList.remove('border-bottom');
    menuSpecial2.classList.add('border-bottom');
    menuSpecial3.classList.remove('border-bottom');

    arrow.classList.remove('arrow_1', 'arrow_3');
    arrow.classList.add('arrow_2');

    menuBarSection1.classList.add('d-none');
    menuBarSection2.classList.remove('d-none');
    menuBarSection3.classList.add('d-none');
})

menuSpecial3.addEventListener("click", () => {
    menuSpecial1.classList.remove('border-bottom');
    menuSpecial2.classList.remove('border-bottom');
    menuSpecial3.classList.add('border-bottom');

    arrow.classList.remove('arrow_1', 'arrow_2');
    arrow.classList.add('arrow_3');

    menuBarSection1.classList.add('d-none');
    menuBarSection2.classList.add('d-none');
    menuBarSection3.classList.remove('d-none');
})


//booking section date time
const datetimeInput = document.getElementById('datetime');
datetimeInput.addEventListener('click', () => {
    const now = new Date();
    const formattedDatetime = now.toISOString().slice(0, 16);
    datetimeInput.value = formattedDatetime;
});

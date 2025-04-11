var menu = document.getElementById('mobile-menu');
const closeMenu = () => menu.classList.add('translate-x-full'); 

document.getElementById('menu-toggle').addEventListener('click', () => menu.classList.remove('translate-x-full'));

document.getElementById('menu-close').addEventListener('click', () => closeMenu());

function scrollToElement(e) {
    e.preventDefault();
    const element = document.querySelector(e.target.hash);

    const offset = (window.innerWidth >= 700) ? 100 : 80;
    let posicionY = Math.round(Number(element?.getBoundingClientRect().top + window.scrollY - offset));
    
    window.scrollTo({
        top: posicionY,
        behavior: 'smooth'
    });       
}

document.querySelectorAll('a').forEach(element => {
    element.addEventListener('click', scrollToElement);
})
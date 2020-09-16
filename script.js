function classToggle() {
    const navs = document.querySelectorAll('.menuitems .menu-toggle');
    navs.forEach(nav=> nav.classList.toggle('menu-toggleshow'));
}
document.querySelector('.nav .menu-toggle')
    .addEventListener('click',classToggle);
// Open Menu
var toggle = document.querySelector('.toggle__button');
var navbar = document.querySelector('.navbar');
var navLink = document.querySelectorAll('.navbar__link');

var openMenu = () => {
    navbar.classList.toggle('active');
};

toggle.addEventListener('click', openMenu);
// End Open Menu



// Close Menu
var closeMenu = () => {
    navbar.classList.remove('active');
};

navLink.forEach((navLink) => {
    navLink.addEventListener("click", closeMenu);
});
// End Close Menu
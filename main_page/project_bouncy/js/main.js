const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('burger-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}

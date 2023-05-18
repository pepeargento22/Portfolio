let boton_menu = document.querySelector('.boton-menu');
let menu = document.querySelector('.menu-hamburguesa ul');


boton_menu.addEventListener('click', function() {
    menu.classList.toggle('visible');
})
/* MENU HAMBURGUESA EN MOBILE */

let boton_menu = document.querySelector('.boton-menu');
let menu = document.querySelector('.menu-hamburguesa ul');


boton_menu.addEventListener('click', function() {
    menu.classList.toggle('visible');
})

document.addEventListener('click', function(e) {
    if (menu.classList == 'visible') {
        switch (e.target.classList.value) {
            case 'boton-menu':
            case 'imagen-menu':
                break;

            default:
                menu.classList.toggle('visible');
                break;
        }
    }
})


/* BOTON PARA MANDAR MAIL */

/* por ahi con un simple mailto: en el html sale */


/* DESCARGA DEL CV */


/* MODO LIGHT/DARK */


/* EASTER EGG */
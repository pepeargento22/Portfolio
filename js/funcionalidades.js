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
            case 'menu-mobile':
            case 'icon-modo':
                break;

            default:
                menu.classList.toggle('visible');
                break;
        }
    }
})


/* MODO LIGHT/DARK */

let boton = document.querySelector('.boton-modo');
let indice = boton.classList.value.indexOf(" ");


boton.addEventListener('click', function() {
    let modo = boton.classList.value.slice(indice+1);
    let elementos = document.querySelectorAll('.' + modo);
    elementos.forEach(el => {
        el.classList.remove(modo);
        if (modo == 'dark-mode') {
            el.classList.add('light-mode');
        } else {
            el.classList.add('dark-mode');
        }
    })
})


/* EASTER EGG */

let cv = document.querySelector('.grid-item3');
let conocimientos = document.querySelectorAll('.contenedor-conocimientos ul li');
let proyectos = document.querySelectorAll('.proyecto');
let cara = document.querySelector('.contenedor-sorpresa img');
let musica = document.querySelector('audio');


cara.addEventListener('click', function() {
    if (cara.classList.value != 'sorpresa') {
        /* ESTO LO PUEDO DEFINIR CON UNA FUNCION */
        cv.classList.add('sorpresa');
        conocimientos.forEach(li => {
            li.classList.add('sorpresa');
        });
        proyectos.forEach(proyecto => {
            proyecto.classList.add('sorpresa');
        });
        cara.classList.add('sorpresa');
        musica.play();
        setTimeout(function() {
            cv.classList.remove('sorpresa');
            conocimientos.forEach(li => {
                li.classList.remove('sorpresa');
            });
            proyectos.forEach(proyecto => {
                proyecto.classList.remove('sorpresa');
            });
            cara.classList.remove('sorpresa');
        }, 16000);
    }
})
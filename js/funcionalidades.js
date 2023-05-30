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
let conjunto = [cv, conocimientos, proyectos, cara];
let musica = document.querySelector('audio');


cara.addEventListener('click', function() {
    if (cara.classList.value != 'sorpresa') {
        musica.play();
        girarElementos(conjunto);
        setTimeout( function() {
            frenarElementos(conjunto);
        }, 16000);    
    }
})

function girarElementos(array) {
    array.forEach(elem => {
        let cant = elem.length;
        if (cant == undefined) {
            elem.classList.add('sorpresa');
        } else {
            elem.forEach(e => {
                e.classList.add('sorpresa');
            });
        }
    });
}

function frenarElementos(arr) {
    arr.forEach(el => {
        let n = el.length;
        if (n == undefined) {
            el.classList.remove('sorpresa');
        } else {
            el.forEach(e => {
                e.classList.remove('sorpresa');
            });
        }
    });
}
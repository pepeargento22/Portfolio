export const easterEgg = (elemento) => {
    if (elemento.classList.value != 'sorpresa') {
        const musica = document.querySelector('audio')
        const conjunto = document.querySelectorAll('.girable')
        musica.play();
        girarElementos(conjunto);
        setTimeout( function() {
            frenarElementos(conjunto);
        }, 16000);    
    }
}

function girarElementos(array) {
    array.forEach(elem => {
        elem.classList.add('sorpresa');
    });
}

function frenarElementos(arr) {
    arr.forEach(el => {
        el.classList.remove('sorpresa');
    });
}
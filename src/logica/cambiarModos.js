export const cambiarModos = () => {
    const botonModo = document.querySelector('.boton-modo');
    const indice = botonModo.classList.value.indexOf(" ");
    const modo = botonModo.classList.value.slice(indice+1);
    const elementos = document.querySelectorAll('.' + modo);
    elementos.forEach(el => {
        el.classList.remove(modo);
        if (modo == 'dark-mode') {
            el.classList.add('light-mode');
        } else {
            el.classList.add('dark-mode');
        }
    })
}
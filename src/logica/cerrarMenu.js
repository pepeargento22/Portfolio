export const cerrarMenu = (e) => {
    const menu = document.querySelector('.menu-hamburguesa ul') 
    if (menu.classList == 'visible') {
        switch (e.target.classList.value) {
            case 'boton-menu':
            case 'menu-mobile':
            case 'icon icon-menu':
            case 'icon-modo':
            
                break;

            default:
                menu.classList.toggle('visible');
                break;
        }
    }
}
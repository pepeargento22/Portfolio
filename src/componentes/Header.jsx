/* eslint-disable react/prop-types */
import useModos from "../hooks/useModos"
import { menuMobile } from '../logica/menuMobile'

import sol from '../assets/sol.svg'
import luna from '../assets/luna.svg'

function BotonModo({estado, modoOscuro, manejarClick}) {
    

    return (
        <>
            <button className={`boton-modo ${estado}`} onClick={manejarClick}>
                { 
                    modoOscuro 
                        ? <img src={luna} alt='dark mode enabled' /> 
                        : <img src={sol} alt='light mode enabled' />
                }   
            </button>
        </>
    )
}

export function BotonMail({estado}) {
    return (
        <>
            <button className={`boton-mail ${estado}`}>
                <a href="mailto:paco19956@hotmail.com">Contactame</a>
            </button>
        </>
    )
}

function BotonMenu({manejarClick}) {
    return(
        <>
            <div className="boton-menu" onClick={manejarClick}>
                <svg className="icon icon-menu"><use className="menu-mobile" xlinkHref="#icon-menu"></use></svg>
            </div>
        </>
    )
}

function Redes({estado}) {

    return (
        <>
            <div className={`links-redes ${estado}`}>
                <span>Francisco Garcia Huidobro</span>
                <div><a href="https://github.com/pepeargento22" target="_blank"><svg className="icon icon-github"><use xlinkHref="#icon-github"></use></svg></a></div>
                <div><a href="https://www.linkedin.com/in/francisco-garcia-huidobro-2256a41b5/" target="_blank"><svg className="icon icon-linkedin"><use xlinkHref="#icon-linkedin"></use></svg></a></div>
            </div>
        </>
    )
}

function Menu() {
    return (
        <>
            <ul>
                <li><a href="#introduccion">Intro</a></li>
                <li><a href="#experiencia">Experiencia</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
            </ul>
        </>
    )
}


export function Header() {
    const { estadoModo, modoOscuro, cambiarModos} = useModos()

    const manejarClick = (e) => {
        const botonCliqueado = e.target.classList.value
        if (botonCliqueado.includes('menu')) {
            menuMobile()
        } else {
            cambiarModos()
        }
    }

    return (
        <>
            <header className={estadoModo}>
                <nav>
                    <Redes estado={estadoModo}/>
                    <div className={`menu ${estadoModo}`}>
                        <Menu />
                    </div>
                    <div className="botones">
                        <BotonModo estado={estadoModo} modoOscuro={modoOscuro} manejarClick={manejarClick}/>
                        <BotonMail estado={estadoModo}/>
                        <div className={`menu-hamburguesa ${estadoModo}`}>
                            <BotonMenu manejarClick={manejarClick}/>
                            <Menu />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
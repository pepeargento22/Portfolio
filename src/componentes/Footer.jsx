import { easterEgg } from "../logica/easterEgg"
import { useModos } from "../hooks/useModos"
import { BotonMail } from "./Header"

import cara from '../assets/cara.webp'
import Audio from '../assets/Audio.mp3'

export function Footer() {
    const { estadoModo } = useModos()

    const manejarClick = () => {
        const elemCara = document.querySelector('.contenedor-sorpresa img')
        easterEgg(elemCara)
    }

    return (
        <>
            <footer className={estadoModo}>
                <h2>Contacto</h2>
                <div className="contenedor-flex">
                    <div>
                        <ul>
                            <li><svg className="icon icon-phone"><use xlinkHref="#icon-phone"></use></svg> <span>11-5035-1001</span></li>
                            <li><svg className="icon icon-envelop"><use xlinkHref="#icon-envelop"></use></svg> <span>paco19956@hotmail.com</span></li>
                        </ul>
                    </div>
                    <div className="contenedor-sorpresa girable">
                        <img src={cara} alt="cliqueame" onClick={manejarClick} />
                        <audio src={Audio} type="audio/mp3"></audio>
                    </div>
                    <div className="botones">
                        <BotonMail estado={estadoModo}/>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
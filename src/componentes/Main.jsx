/* eslint-disable react/prop-types */
import infoProyectos from '../infoProyectos.json'
import infoExperiencia from '../infoExperiencia.json'
import CV from '../assets/CV.pdf'
import CV_foto from '../assets/CV_foto.png'
import download from '../assets/download.svg'

import { useModos } from '../hooks/useModos'
import { Proyecto } from './Proyecto'

function Introduccion({estado}) {
    
    return (
        <>
            <section className="contenedor-introduccion">
                <div className= {`contenedor-cv ${estado} girable`}>
                    <a href={CV} download>
                        <img src={CV_foto} alt="CV" />
                        <div className="descargar">
                            <img src={download} alt="Descargar CV" />
                        </div>
                    </a>
                    <a name="experiencia"></a>
                </div>
                <div className="contenedor-dev">
                    <h1>Francisco Garcia Huidobro</h1>
                    <h2>Desarrollador Front End</h2>
                    <ul>
                        <li>React</li>
                        <li>Python</li>
                        <li>UX</li>
                        <li>Inglés</li>
                    </ul>
                </div>
                
            </section>
            
        </>
    )
} 

function Proyectos({ titulo, estado, info, link }) {

    return (
        <section className={`contenedor-${titulo}`}>
            <h2>{titulo}</h2>
            <div className='contenedor-flex'>
                {info.map((proyecto, index) => (
                    <Proyecto
                        key = {index}
                        estado = {estado} 
                        titulo = {proyecto.titulo}
                        pagina = {proyecto.pagina}
                        imagen = {proyecto.imagen}
                        repositorio = {proyecto.repositorio} 
                        descripcion = {proyecto.descripcion}
                        año = {proyecto.año}
                    />
                ))}
            </div>
            <a name={link}></a>
        </section>
    )
}

export function Main() {
    const { estadoModo } = useModos()

    return (
        <main className={estadoModo}>
            <Introduccion estado={estadoModo}/>
            <Proyectos
                titulo='experiencia'
                estado={estadoModo}
                info={infoExperiencia}
                link='proyectos'
            />
            <Proyectos 
                titulo='proyectos'
                estado={estadoModo}
                info={infoProyectos}
            />
        </main>
    )
}
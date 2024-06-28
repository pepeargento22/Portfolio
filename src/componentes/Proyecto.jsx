/* eslint-disable react/prop-types */
function ItemLista({texto}) {
    return (
        <li className='girable'>
            <svg className="icon"><use href={`#icon-${texto}`}></use></svg>
        </li>
    )
}


export function Proyecto({ estado, titulo, pagina, repositorio, imagen, descripcion, año, tecnologias_utilizadas }) {
    const tienePagina = pagina != ""
    const tieneRepo = repositorio != "" 

    return (
        <>
            <div className={`proyecto ${ tienePagina ? "" : "pageless"} ${estado} girable`}>
                <div>
                    <span>{año}</span>
                    <img src={imagen} alt={titulo}  />
                </div>
                <div>
                    <a href={pagina} target="_blank">{titulo} {tienePagina ? '→' : ''}</a>
                </div>
                <p className={estado}>
                    {descripcion}
                </p>
                { tieneRepo 
                    ? (<a href={repositorio} target="_blank">
                        <svg className="icon icon-git"><use xlinkHref="#icon-git"></use></svg> <span>Código</span>
                    </a>)
                    :  (<br />)
                }
                    <ul className="proyecto-tecnologias">
                        {
                            tecnologias_utilizadas?.map((logo, index) => (
                                <ItemLista 
                                    key = {index} 
                                    texto={logo}
                                />
                        ))}
                    </ul>
            </div>
        </>
    )
}

export default Proyecto
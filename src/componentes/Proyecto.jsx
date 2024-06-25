/* eslint-disable react/prop-types */
function ItemLista({texto}) {
    return (
        <li className='girable'>
            {texto}
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
                        <svg className="icon icon-embed2"><use xlinkHref="#icon-embed2"></use></svg> <span>Código</span>
                    </a>)
                    :  (<br />)
                }
                <div>
                    <ul>
                        {
                            tecnologias_utilizadas?.map((logo, index) => (
                                <ItemLista 
                                    key = {index} 
                                    texto={logo} //LO UNICO QUE ME FALTA ES METER LOS LOGOS CORRESPONDIENTES A CADA PROYECTO
                                />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Proyecto
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const ContextoModo = createContext()

export function ModoProvider({ children }) {

    const [estadoModo, setEstadoModo] = useState('dark-mode')
    
    const modoOscuro = estadoModo == 'dark-mode'
    const cambiarModos = () => {
        if (modoOscuro) {
            setEstadoModo('light-mode')
        } else {
            setEstadoModo('dark-mode')
        }
    }

    return (
        <ContextoModo.Provider value={{
                estadoModo,
                setEstadoModo,
                modoOscuro,
                cambiarModos
        }}>
            {children}
        </ContextoModo.Provider>
    )
}
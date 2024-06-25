import { useContext } from 'react'
import { ContextoModo } from '../contexto/modo'

export function useModos() {
    const contexto = useContext(ContextoModo)

    return contexto
}

export default useModos
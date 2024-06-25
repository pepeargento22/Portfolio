import { cerrarMenu } from './logica/cerrarMenu'
import { Header } from './componentes/Header'
import { Main } from './componentes/Main'
import { Footer } from './componentes/Footer'
import { Svg } from './componentes/Svg'
import { ModoProvider } from './contexto/modo'
import './App.css'

function App() {

const manejarClick = (elem) => {
  cerrarMenu(elem)
}

  return (
    <ModoProvider>
      <div id='app' className= 'dark-mode' onClick={manejarClick}>
        <Header />
        <a name='introduccion'></a>
        <Main />
        <Footer />
        <Svg />
      </div>
    </ModoProvider>
  )
}

export default App

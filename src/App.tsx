
import './App.css'
import ButtonFatec from './components/button-fatec'
import InputFatec from './components/input-Fatec'

function App() { //tem que ser com letra maíuscula nos componentes
  // não pode no return ter dois elementos na raiz
  //usar tag fantasma para dois elementos exemplo no TESTE ou criar Div 
  return( 
    <>
  <p>Entre em contato</p>
  <hr />
  <div>
    <InputFatec type={'input'} label={'Nome'} defaultValue={''} >
    </InputFatec>
  </div>
  <div>
    <InputFatec type={'input'} label={'E-mail'} defaultValue={''} >
    </InputFatec>
  </div>
  <div>
    <InputFatec type={'input'} label={'Telefone'} defaultValue={''} >
    </InputFatec>
  </div>
  <hr />
  <ButtonFatec type='button' label='Fatec: Enviar mensagem'/> 
  </>
  )
}

/*const App => () => {}*/

export default App

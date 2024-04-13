import ButtonFatec from "../button-fatec"
import InputFatec from "../input-Fatec"

function FormFatec(){
  return(
   <> <div>
    <p>Entre em contato</p>
  <hr />
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
)}
export default FormFatec;
import './InputFatec.css'

interface Props {
    type: string
    label: string  
    defaultValue: string  }

function InputFatec({type,label, defaultValue}:Props){
    return(
        <input className='input-Fatec' type={type}  defaultValue={defaultValue} placeholder={label}/>
     )
}

export default InputFatec
import { Button } from '@chakra-ui/react'
//import './ButtonFatec.css'//class name  =  botao-fatec
//import styles from './ButtonFatec.module.css' //styles.botaoFatec

//https://chakra-templates.dev/

interface Props {
    type: 'button'| 'submit'|'reset'
    label: string    
}


function ButtonForms1({label}:Props){
    return(   <>
            <Button  as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'red.400'}
              href={'#'}
              _hover={{
                bg: 'red.300',
              }}>             
            {label}
            </Button>
            </>
     )
}

export default ButtonForms1
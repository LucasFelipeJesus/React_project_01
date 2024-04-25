import { Box, Stack } from "@chakra-ui/react"
import InputFatec from "../input"
import ButtonForms1 from "../button"



function FormFatec() {
    return (
        <>
            <Box as={'form'}>
                <Stack spacing={4} w={'full'}>
                    <InputFatec text='Nome' defaultvalue='' type='text' />
                    <InputFatec text='E-mail' defaultvalue='' type='email' />
                    <InputFatec text='Telefone' defaultvalue='' type='tel' />
                    <ButtonForms1 type='button' label='Fatec: Enviar mensagem' />
                </Stack>
            </Box>
        </>
    )
}

export default FormFatec
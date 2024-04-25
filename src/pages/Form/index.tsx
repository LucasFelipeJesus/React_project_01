import { Box, Center, Container, Heading, Stack,Text } from "@chakra-ui/react";
import Layout from "../../components/layout/layout";
import FormFatec from "../../components/formCadastro";


function Contato() {
    return (
        <Layout>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Cadastro</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Preencha o formulário abaixo .
                    </Text>
                    <Center py={6}>
                        <Box
                            maxW={'520px'}
                            w={'full'}
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={6}
                            textAlign={'center'}>
                            <FormFatec />
                        </Box>
                    </Center>
                </Stack>
            </Box>
        </Layout>
    )
}

export default Contato;
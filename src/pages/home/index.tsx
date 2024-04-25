import { Stack, Container, Heading, Box, Text } from "@chakra-ui/react";
import Layout from "../../components/layout/layout";


function Home() {
    return (
        <Layout>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={'3xl'}>Pagina Inicial</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        Este projeto é um exemplo de como usar o chrakra e aplicações.
                    </Text>
                </Stack>
            </Box>
        </Layout >
    );
}

export default Home;
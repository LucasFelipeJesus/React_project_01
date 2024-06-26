import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <Box textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, teal.400, teal.600)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    Página não encontrada!
                </Text>
                <Text color={'gray.500'} mb={6}>
                    A página que você procura não existe ou foi removida.
                </Text>

                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid">
                    <Link to="/">Voltar para Home</Link>
                </Button>
            </Box>
        </div>
    )
}

export default NotFound
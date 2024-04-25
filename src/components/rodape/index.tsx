import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Rodape() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          
          <Text>© 2024 Fatec Indaiatuba. All rights reserved</Text>
        </Container>
      </Box>
    );
  }

  /*<Stack direction={'row'} spacing={6}>
            <Link href={'/'}>Pagina Inicial</Link>
            <Link href={'/sobre'}>Sobre</Link>
            <Link href={'/FormFatec'}>Formulario de Cadastro</Link>
            <Link href={'/tarefas'}>Tarefas</Link>
          </Stack>*/
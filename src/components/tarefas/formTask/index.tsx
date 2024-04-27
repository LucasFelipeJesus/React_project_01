import { useColorModeValue, Stack, FormControl, FormLabel, HStack, Checkbox, Button, Box } from "@chakra-ui/react";
import InputFatec from "../../input";

function FormTask(){

    <Box
    maxW={'520px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    rounded={'lg'}
    p={6}
    textAlign={'center'}>
    <Stack spacing={4}>
        <FormControl id="task">
            <FormLabel>Inserir nova tarefa</FormLabel>
            <HStack>
                <InputFatec text='Digite o título da Tarefa' defaultvalue='' type='text' />
                <Checkbox>Realizada?</Checkbox>
                <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500', }}>
                    Inserir
                </Button>
            </HStack>
        </FormControl>
    </Stack>
    </Box>
}

export default FormTask;
import { Stack, Container, Heading, Center, useColorModeValue, FormControl, FormLabel, HStack, Checkbox, Button, Box,Text } from "@chakra-ui/react";

import InputFatec from "../../components/input";
import Layout from "../../components/layout/layout";
import ItemTask from "../../components/tarefas/itemTasks";


function TarefasFatec() {

  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];

  return (
      <Layout>
          <Box p={4}>
              <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                  <Heading fontSize={'3xl'}>Cadastro de Tarefas</Heading>
                  <Text color={'gray.600'} fontSize={'xl'}>
                      Lista de Tarefas
                  </Text>
                  <Center >
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
                          <Stack py={4}>
                             <ItemTask tasks={tasks} />
                          </Stack>
                      </Box>
                  </Center>
              </Stack>
          </Box>
      </Layout>
  )
}

export default TarefasFatec;
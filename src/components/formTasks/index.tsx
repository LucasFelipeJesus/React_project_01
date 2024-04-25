import { Card, HStack, CardBody,Text } from "@chakra-ui/react";
import ButtonForms1 from "../button";

interface Props {
  tasks: string[];
}

function ListTasks({ tasks }: Props) {
  return (
      <>
          {
              tasks.map((task) => (
                  <Card variant={'filled'}>
                      <HStack>
                          <CardBody textAlign={'left'}>
                              <Text>{task}</Text>
                          </CardBody>
                          <ButtonForms1 type='button' label='Pendente' />
                          <ButtonForms1 type='button' label='Excluir' />
                      </HStack>
                  </Card>
              ))
          }
      </>
  );
}

export default ListTasks;
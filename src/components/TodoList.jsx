import { CheckIcon, DeleteIcon } from "@chakra-ui/icons"
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer
} from "@chakra-ui/react"
import data from "../data"

const TodoList = () => {
  return(
    <VStack
      divider={<StackDivider/>}
      borderWidth={1}
      borderColor="gray.300"
      p={4}
      borderRadius="lg"
      w='100%'
      maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
      alignItems="stretch"
    >
      {
        data.map((todo) => (
          <HStack >
            <Text>{ todo.body }</Text>
            <Spacer/>
            <IconButton icon={<DeleteIcon/>} />
          </HStack>
        ))
      }
    </VStack>
  )
}

export default TodoList
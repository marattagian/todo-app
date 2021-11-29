import { CheckIcon, DeleteIcon } from "@chakra-ui/icons"
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge
} from "@chakra-ui/react"

const TodoList = ({ tasks, deleteTask }) => {

  if (!tasks.length) {
    return(
      <Badge
        colorScheme="purple"
        borderRadius="lg"
        p={6}
      >
        No Task for the moment
      </Badge>
    )
  }

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
        tasks.map((task) => (
          <HStack key={task.id}>
            <Text>{ task.body }</Text>
            <Spacer/>
            <IconButton
              icon={<DeleteIcon/>}
              onClick={() => deleteTask(task.id)}
            />
          </HStack>
        ))
      }
    </VStack>
  )
}

export default TodoList
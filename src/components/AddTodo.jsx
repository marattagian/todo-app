import {
  HStack,
  Input,
  Button
} from "@chakra-ui/react"

const AddTodo = () => {
  const handleSumbit = (e) => {}

  return(
    <form onSubmit={handleSumbit}>
      <HStack borderWidth={0} p={6} w="xl" my="4">
        <Input variant="filled" placeholder='create new task...' />
        <Button colorScheme="purple" px='8'>Add Task</Button>
      </HStack>
    </form>
  )
}

export default AddTodo
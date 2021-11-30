import {
  HStack,
  Input,
  Button,
  useToast
} from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { useState } from "react"

const AddTodo = ({ addTask }) => {
  const [content, setContent] = useState('')
  const toast = useToast()

  const handleSumbit = (e) => {
    e.preventDefault()
    if (!content) {
      return toast({
        title: "Lack of Content",
        description: "You need to provide content to create a task",
        status: "warning",
        duration: 6000,
        isClosable: true,
      })
    }
    addTask({
      id: nanoid(),
      body: content
    })
    setContent('')
  }

  return(
    <form onSubmit={handleSumbit}>
      <HStack  p={6} w="xl" my="4" maxW={{base: '100vw', sm: '80vw', lg: '50vw', xl: '40vw'}}>
        <Input
          variant="filled" 
          placeholder='create new task...' 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="purple" px='8' type='submit'>Add Task</Button>
      </HStack>
    </form>
  )
}

export default AddTodo
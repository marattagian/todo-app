import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Heading, VStack, IconButton } from "@chakra-ui/react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

function App() {

  return (
    <VStack p={6}>
      <IconButton
        icon={<MoonIcon/>}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        size="3xl"
        mb="8"
        fontWeight="extrabold"
        bgGradient='linear(to-r, purple.500, cyan.400, teal.400)'
        bgClip="text"
      >
        Todo Application
      </Heading>
      <AddTodo/>
      <TodoList />
    </VStack>
  )
}

export default App

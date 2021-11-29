import { Heading, VStack } from "@chakra-ui/react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

function App() {

  return (
    <VStack>
      <Heading size="4xl">Todo Application</Heading>
      <AddTodo/>
      <TodoList />
    </VStack>
  )
}

export default App

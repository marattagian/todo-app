import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Heading, VStack, IconButton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

function App() {
  const [tasksList, setTasksList] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksList))
  }, [tasksList])

  const addTask = (task) => {
    setTasksList([...tasksList, task])
  }

  const deleteTask = (id) => {
    setTasksList(tasksList.filter(task => task.id !== id))
  }

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
      <AddTodo addTask={addTask} />
      <TodoList tasks={tasksList} deleteTask={deleteTask}/>
    </VStack>
  )
}

export default App

import React from 'react'
import TodoList from './TodoList'
import { TodoProvider } from './TodoContext/TodoContext'

const App = () => {
  return (
   <div className='w-full h-[100vh] flex justify-center items-center'> 
    <TodoProvider>
    <TodoList/>
    </TodoProvider>
   </div>
  
  )
}

export default App
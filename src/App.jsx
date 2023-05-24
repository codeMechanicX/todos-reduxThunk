
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import handleTodos from "./Services/Actions/todosAction"


function App() {
const dispatch = useDispatch()
const {isLoading,error,todos} = useSelector((state)=>state)

  useEffect(()=>{
      dispatch(handleTodos())
  },[])
  
  console.log(todos)
  return (
    <>
      <div>
        {
          isLoading && <h3>Loading....</h3>
        }
        {
          error && <h3>{error}</h3>
        }
        {
          todos && todos.map((todo)=>{
            return <div key={todo.id}>
              <h4>{todo.id}</h4>
              <h4>{todo.title}</h4>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App

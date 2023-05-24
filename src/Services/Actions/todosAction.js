import axios from "axios";
import { TODOS_FAILED, TODOS_REQUEST, TODOS_SUCCESS } from "../todosConstants/TodosConstants";
const API = "https://jsonplaceholder.typicode.com/todos";
const handleTodos = () => async(dispatch)=>{
   try {
    dispatch ({type:TODOS_REQUEST})
    const res = await axios.get(API)
    dispatch({type:TODOS_SUCCESS,payload:res.data})
   } catch (errr) {
        dispatch({type:TODOS_FAILED,payload:errr.message})
   }
}

export default handleTodos;


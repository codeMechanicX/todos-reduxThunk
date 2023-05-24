import { TODOS_FAILED, TODOS_REQUEST, TODOS_SUCCESS } from "../todosConstants/TodosConstants";

const initialState = {
    isLoading:false,
    todos:[],
    error :null,
}

const todosReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TODOS_REQUEST:
            return{
                ...state,
                isLoading:true,
                todos:[]
            }
        case TODOS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                todos:action.payload
            }
        case TODOS_FAILED:
            return{
                ...state,
                isLoading:false,
                error:action.payload,
                todos:[]
            }
    
        default:
           return state;
    }
}

export default todosReducer;
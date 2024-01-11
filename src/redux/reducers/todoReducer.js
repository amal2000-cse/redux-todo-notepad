//reducer takes state and action as input
 //and based on those actions it performs different actions

import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initalState={
    todos:[
        {"text":"Meeting at 9", completed:true},
        {"text":"Dinner at 10",completed:false},
        {"text":"lunch at 10",completed:false},
    ]
}

export function todoReducer(state=initalState,action){
    switch(action.type){
        // ADD_TODO is taking the payload and adding that payload to the exising collection
        case ADD_TODO:
            return{
                //this is returning an object
                //here we are passing all the existing data in the state using (...)
                ...state,
                //we are also going to pass the attribute todo
                todos:[
                    ...state.todos, //here we are breaking down all the todo form the todos
                    {
                        text:action.text,//and add a todo here
                        completed:false,
                    }

                ]
            }
        case TOGGLE_TODO:
            // TOGGLE_TODO is going to the individual elements and wherever the index is matching it will switching the completed property
            return{
                ...state,
                todos:state.todos.map((todo,i)=>{
                    if(i===action.index){
                        todo.completed=!todo.completed
                    }
                    //we are returning the todo here - because the map function will
                    //take the todo and create a new collection, (a new array)
                    return todo;
                })
            }
        default:
            return state
    }
 }
import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

//initial state
const initalState={
    notes:[
        {
            text:'Lorem ipsum10 something som',createdOn:new Date()
        },
        {
            text:'Lorem ipsum10 somethingsomethingsomethingsomethingsomething som',createdOn:new Date()
        },

    ]
};


export function noteReducer(state=initalState,action){
    switch(action.type){
        case ADD_NOTE:
            return{
                ...state,
                notes:[
                    ...state.notes,
                    {
                        text:action.text,
                        createdOn:new Date()
                    }
                ]
            }

        case DELETE_NOTE:
            state.notes.splice(action.index,1);
            return{
                ...state,
                notes:[...state.notes]
            }
        default:
            return state;
    }
}
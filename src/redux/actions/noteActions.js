

export const ADD_NOTE="Add Note";
export const DELETE_NOTE="Delete Note";

//action creators

//THIS takes the payload that we pass from the componenet
//along with the action
export const addNote=(text)=>({text,type:ADD_NOTE});
export const deleteNote=(index)=>({index,type:DELETE_NOTE});

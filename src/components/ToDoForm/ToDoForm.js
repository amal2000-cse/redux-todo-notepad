import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

// useDispatch is a hook which will help us to dispatch any action

function ToDoForm() {
  const [todoText, setTodoText] = useState("");

  //this returns redux store dispatch function
  const dispatch=useDispatch()

  //this works on a pattern called publisher-subscriber pattern

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    //this dispatch takes the texting on the input field
    dispatch(addTodo(todoText))
  };

  return (
    <div className="container">
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;

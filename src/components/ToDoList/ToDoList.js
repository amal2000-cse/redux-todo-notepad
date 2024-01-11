import { toggleTodo } from "../../redux/actions/todoActions";
import "./ToDoList.css";
import { useDispatch, useSelector } from "react-redux";

 {/* in react-redux there is hook which is called useSelector
      ie any component which needs to access the store and its data
      they dont need to call directly the store - useSelector is a middleman between the store and the compoenents
      as store is a very important part.  */}

function ToDoList({onToggle}) {

  // getting the data from the store and storing them inside todos
  //by using the hook useSelector

  //here we are working with multiple reducer- so we have to use -
  // state.todoReducer.todos
  const todos=useSelector((state) => state.todoReducer.todos);
  // now using the hook useDispatch to get the stores dispatch function here
  //
  const dispatch=useDispatch();
  
  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(toggleTodo(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;

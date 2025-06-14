import React, {useState} from 'react';
import InputField from "./components/InputField";
import {Todo} from "./model";

function App() {

    const[todo, setTodo] = useState<string>("");

    const [todos, setTodos]= useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {e.preventDefault()

        if(todo){
            setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
            setTodo("");
        }

    };

  return (
    <div className="App">
      <span className={"heading"}> TASKIFY </span>

      <InputField todo={todo} setTodo ={setTodo} handleAdd={handleAdd}/>

    </div>
  );
}

export default App;

import React, { useState, useEffect }from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {

    //state
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("All");
    const [filteredTodos, setFilterTodos] = useState([]);

    //useEffect
    useEffect(() => {
        //function filtered handler can go here
        //console.log("hey");
        filterHandler();
    }, [todos, status]);

    //function
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilterTodos(todos.filter(todo => todo.completed === true))
                break;
            case "To Do":
                setFilterTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilterTodos(todos);
                break;
        }
    }

    return (
        <div className="App">
          <header>
              <h1> TO-DO List </h1>
          </header>
            <Form todos={todos}
                  setTodos={setTodos}
                  setInputText={setInputText}
                  inputText={inputText}
                  setStatus={setStatus}

            />
            <TodoList todos={todos}
                      setTodos={setTodos}
                      filteredTodos={filteredTodos}
            />
        </div>
  );
}

export default App;

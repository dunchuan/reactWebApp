import React from "react";

// const Form =() => {
//
// } another way than using function() Form(){}
function Form({setInputText, todos, setTodos, inputText, setStatus}){
    // javascript function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        //console.log("hey");
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*10},
        ]);
        setInputText(""); // clear up the current input text field
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
      <form>
          <input value={inputText} onChange={inputTextHandler} className="todo-input" type="text" />
          <button onClick={submitTodoHandler} className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select onChange={statusHandler} name="todos" className={"filter-todo"}>
                <option value={"All"}>All Tasks</option>
                <option value={"completed"}>Completed Tasks</option>
                <option value={"To Do"}>To Do's</option>
            </select>
          </div>
      </form>
    );
};

export default Form;

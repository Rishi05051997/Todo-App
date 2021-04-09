
import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

function App() {
  const [taskInput, setTask] = useState("");

  function addTask(){
    
  } 

  return (
    <div className="App" 
    style=
    {{
        display:"flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"


      }}>
      <h1>Todo App...!!!</h1>
      <TextField 
      id="standard-basic" 
      value = {taskInput}
      onChange = {(e) => setTask(e.target.value)}
      label="Write your task...!!"  
      style={{maxWidth: "200px"}}/>
    </div>
  );
}

export default App;


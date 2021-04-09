
import './App.css';
import TextField from '@material-ui/core/TextField';

function App() {
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
      <TextField id="standard-basic" label="Write your task...!!"  style={{maxWidth: "200px"}}/>
    </div>
  );
}

export default App;


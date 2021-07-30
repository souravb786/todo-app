
import './App.css';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'; 
import db from './firebase';
import firebase from 'firebase';
function App() {
  // two fundamentals of react
  // STATE get cleared after refresh
  // props
  // STATE is a short term memory for each component
  // useState is for providing short term memory
  // todos is a array
  // setTodos is for changing our Todos
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log(input);

  // when the app loads, we need to listen to the databse and fetch new todos as they get added/removed

  useEffect(()=>{
    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=> {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [] );
  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // this will stop the refreshing of the page
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // ...todo is for checking the previous state and then spreading , input is for pushing the new value into it 
    setInput(''); // clearing the input field
  }
  return (
    // this is special HTML which is known as jsx
    // JSX = javascript + HTML
    // we can run dynamic job
    <div className="App">
      <h1>Hello World!</h1>
      <form>
        {/* <h1>Our internal sum  is : {sum}</h1> */}
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
        <FormControl>
          <InputLabel>Wirte Your Todo Here</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>Add To Do</Button>
        {/* <button type="submit" onClick={addTodo}>Add To Do</button> */}
      </form>
      

      <ul>
        {/* map method is used for a loop in a javaScript */}
        {todos.map(todo => (
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

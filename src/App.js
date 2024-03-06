import './App.css';
import { useState, useRef } from 'react'

function App() {
  const [x, setx] = useState(
    [
      {
        completed: false,
        value: "Wake up At 7 O'Clock"
      },
      {
        completed: false,
        value: "Start React Project"
      },
      {
        completed: false,
        value: "Feed Your Cats"
      },
      {
        completed: false,
        value: "Get Ready For Work"
      },
    ]);
  const inputRef = useRef()
  const AddTask = () => {
    const value = inputRef.current.value
    const newData = { completed: false, value }
    setx([...x, newData])
    inputRef.current.value = ""
  }

  const TaskDone = (index) => {
    const newX = [...x]                          // == x.slice()
    x[index].completed = !x[index].completed      //if false turn it into true and if true turn it into false
    setx(newX)
    //console.log(x)
  }

  const ToDelete = (index) => {
    const newX = [...x]
    newX.splice(index, 1)     //Delete just that index (1)
    setx(newX)
  }
  return (
    <div className="App">
      <h2>TO Do List</h2>
      <ul>
        {
          x.map((item, index) => {
            return <div className='div1'>
              <li className={item.completed ? "chStyle" : ""} onClick={() => TaskDone(index)} key={item.value}>{item.value}</li>
              <span onClick={() => ToDelete(index)}>X</span>
            </div>
          })
        }
      </ul>
      <input ref={inputRef} placeholder='Enter your new Task' />
      <button onClick={AddTask}>Add</button>
    </div>
  );
}

export default App;

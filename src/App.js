import React , {useState} from 'react'
import Create from './Component/Create'
import "./App.css"
import Read from './Component/Read';

function App() {
  const [open, setOpen] = React.useState(false);
  const [todos , setTodos] = useState([])
  const [isEdit , setIsEdit] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({});

//================ Dialog =================
  const handleClickOpen = () => {
    setOpen(true);
    setIsEdit(false)
  };
  const handleClose = () => {
    setOpen(false);
  };
//================ Dialog ===================


  return (
    <div className='all-component-wrapper'>
      <Create 
      handleClickOpen={handleClickOpen}
      handleClose={handleClose} 
      open={open} todos={todos} 
      setTodos={setTodos} 
      setOpen={setOpen}
      isEdit={isEdit} setIsEdit={setIsEdit}
      currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}
  
      
      />
      <Read 
      todos={todos} 
      setOpen={setOpen} 
      setTodos={setTodos} 
      isEdit={isEdit} setIsEdit={setIsEdit}
      currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}
      
      />
    </div>

  )
}

export default App
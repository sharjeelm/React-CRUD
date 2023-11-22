import React from "react";
import {
    Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "material-ui-core";
import Paper from '@mui/material/Paper';
import "../Component/forms.css"

function Read({todos , setTodos , setOpen, setIsEdit ,  setCurrentTodo }) {
    const editHandler = (todo) => {
      setOpen(true)
      setCurrentTodo({...todo});
      setIsEdit(true)
    }
    const deltHandler = (id) => {
        const newTodo = todos
        
        newTodo.splice(id,1)
        setTodos([...newTodo])
        console.log("clicked")
    }
  return (
    <div className="read-table-wrapper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Hobbies</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {todos.map((todo , id) =>
             <TableRow key={todo.id}>
               <TableCell>{id+1}</TableCell>
                <TableCell>{todo.name}</TableCell>
                <TableCell>{todo.email}</TableCell>
                <TableCell>{todo.age}</TableCell>
                <TableCell>{todo.gender}</TableCell>
                <TableCell>{todo.hobbies}</TableCell>
                <TableCell> <img
                  src={todo.image}
                  style={{height:"100px"}}
                /></TableCell>
                <TableCell>
                    <span className="read-table-btn">
                    <Button variant="contained" color="primary" onClick={()=>editHandler(todo)}>Edit</Button>
                    </span>
                    <Button variant="contained" color="secondary"  onClick={()=>deltHandler(id)} >Delete</Button>
                </TableCell>
               
             </TableRow>
          
          )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Read;

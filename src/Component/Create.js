import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdCancel } from "react-icons/md";
import "../Component/create.css"
import Forms from './Forms';

export default function Create(props) {
const {handleClickOpen,handleClose , open , todos , setTodos , setOpen , isEdit , setIsEdit , currentTodo, setCurrentTodo} = props
  return (
    <React.Fragment>
      <Button variant="contained"  onClick={handleClickOpen}>
        Add Data
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle >
          <div className='form-heading-wrapper'>
            <div>
            </div>
            <div>
              <MdCancel onClick={handleClose} className='cancel-icon'/>
            </div>
          </div>
        </DialogTitle>
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Forms 
            open={open} 
            todos={todos} 
            setTodos={setTodos} 
            setOpen={setOpen}
            isEdit={isEdit} setIsEdit={setIsEdit}
            currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}
            />
            
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>

  );
}
import {
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./forms.css";
import { FormControl } from "material-ui-core";

function Forms(props) {
  const { todos, setTodos, setOpen , isEdit , currentTodo, setCurrentTodo } = props;
  const [inputValues, setInputValues] = useState({name:"",email:"",age:"" , hobbies:"",gender:"" ,image:""});
  
 

  // Handle || Picture
  const handlePicture = (e) => {
    let url = URL.createObjectURL(e.target.files[0])
    setInputValues({...inputValues , image :url});
    
    
  };
  // inputValue || Handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({...inputValues, [name]: value });
    console.log(inputValues);
  };
//  submit Handler
  const submitHandler = () => {
    setTodos([...todos, inputValues]);
    setInputValues("");
    setOpen(false)
  };
// Edit Handler
const oneditHandler = (event) => {
  const { name, value } = event.target;
  setCurrentTodo({...currentTodo, [name]: value });
    console.log(inputValues);
}
// oneditImgHandler
const oneditImgHandler = (e) => {
  let url = URL.createObjectURL(e.target.files[0])
  setCurrentTodo({...currentTodo , image :url});
}
// submitUpdateHandler 
const submitUpdateHandler = () =>{

}

  return (
    <>
    {
      isEdit ?(
        
        <FormControl fullWidth>
        <div>
               <h4>Edit Form Data</h4>
        </div>
        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            name="name"
            value={currentTodo.name}
            onChange={oneditHandler}
           
          />
        </div>
        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="email"
            type="email"
            variant="outlined"
            fullWidth
            className="inputs"
            name="email"
            value={currentTodo.email}
            onChange={oneditHandler}
          />
        </div>
        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="Age"
            type="Number"
            variant="outlined"
            fullWidth
            className="inputs"
            name="age"
            value={currentTodo.age}
            onChange={oneditHandler}
          />
        </div>
        <div>
      
        {inputValues.image ? (
            <div className="input-img-wrapper">
              <img src={inputValues.image} className="input-img" />
            </div>
          ) : (
            ""
          )}
       
        </div>
        <div className="inputs">
          <TextField
            id="outlined-basic"
            type="file"
            variant="outlined"
            className="inputs"
            fullWidth
            name="image"
            // value={currentTodo.image}
            onChange={oneditImgHandler}
          />
        </div>

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="male"
            control={<Radio  checked={currentTodo.gender === 'male'}/>}
            label="Male"
            name="gender"
            onChange={oneditHandler}
          />
          <FormControlLabel
            value="female"
            control={<Radio  checked={currentTodo.gender === 'female'}/>}
            label="Female"
            name="gender"
            onChange={oneditHandler}
          />
        </RadioGroup>

        <div className="inputs">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="hobbies"
            value={currentTodo.hobbies}
            onChange={oneditHandler}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">Hobbies</MenuItem>
            <MenuItem value="Circket">Circket</MenuItem>
            <MenuItem value="Garding">Garding</MenuItem>
            <MenuItem value="Running">Running</MenuItem>
          </Select>
        </div>
        <div className="inputs">
          <Button variant="contained" onClick={submitUpdateHandler}>
            UPDATE
          </Button>
        </div>
      </FormControl>
   
      ) : (
        <FormControl fullWidth>
             
            <div>
               <h4>Add Form Data</h4>
            </div>
          
        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            name="name"
            onChange={handleChange}
          
          />
        </div>
        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="email"
            type="email"
            variant="outlined"
            fullWidth
            className="inputs"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="Age"
            type="Number"
            variant="outlined"
            fullWidth
            className="inputs"
            name="age"
            onChange={handleChange}
          />
        </div>
        <div>
          {inputValues.image ? (
            <div className="input-img-wrapper">
              <img src={inputValues.image} className="input-img" />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="inputs">
          <TextField
            id="outlined-basic"
            type="file"
            variant="outlined"
            className="inputs"
            fullWidth
            name="image"
            onChange={handlePicture}
          />
        </div>

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            name="gender"
            onChange={handleChange}
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
            name="gender"
            onChange={handleChange}
          />
        </RadioGroup>

        <div className="inputs">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="hobbies"
            onChange={handleChange}
            value={inputValues.hobbies}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">Hobbies</MenuItem>
            <MenuItem value="Circket">Circket</MenuItem>
            <MenuItem value="Garding">Garding</MenuItem>
            <MenuItem value="Running">Running</MenuItem>
          </Select>
        </div>
        <div className="inputs">
          <Button variant="contained" onClick={submitHandler}>
            SUBMIT
          </Button>
        </div>
      </FormControl>
   
      )
    }
     </>
  );
}

export default Forms;

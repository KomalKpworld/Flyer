import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
export default function SelectLabels() {
  const [id, setId] = React.useState(null);
  const [postData, SetPost] = useState([]);
  const [error, SetError] = useState('')
  const handleChange = (event) => {
    setId(event.target.value);
  };
  function getFlyerList(flyerId) {
    axios.get('http://localhost:3001/get-flyer-list?search?').then((response) => {
      console.log(response)
      SetPost(response.data.data);
 let a  = response.data.data.map((id)=>{
  setId(id._id)
  console.log(id._id)
 })
  
    }).catch((error) => {
      return SetError(error.message)
    })
  }

  useEffect(() => {
    getFlyerList();
  }, []);


console.log(id)
  return (
    <div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">flyerId</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={id}
            onChange={handleChange}
            autoWidth
            label="id"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {postData.map((data) => {
              return (
                <MenuItem key={data?._id} value="" onClick={()=>{console.log("data._id")}}>{data?._id[data.id]}</MenuItem>
              )
            })
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
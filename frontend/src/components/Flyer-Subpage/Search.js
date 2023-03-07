import React, { useState, useEffect } from 'react'

import axios from "axios";

const Search = () => {
    const [postData, SetPost] = useState([]);
    const [error, SetError] = useState('')
   const [select, setSelect] = useState();

    useEffect(() => {
        getSubFLyer()
    }, []);
    function getSubFLyer() {
        axios.get('http://localhost:3001/get-flyer-list').then((response) => {
            SetPost(response.data.data);
        }).catch((error) => {
            return SetError(error.message)
        })
    } console.log(select)
   
    console.log(postData)
    return (
        <div>
             <select value={select} onChange ={e=>setSelect(e.target.value)} >
             <option>choose</option>  
             {
                postData.length > 0 ? postData.map((data) => {
                    return (
                            <option key={data._id}> {data._id}</option>
                    )
                })
                 : 'null'
            }
            </select>
        </div>
    )
}

export default Search

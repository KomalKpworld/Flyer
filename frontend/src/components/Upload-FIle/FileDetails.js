import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';



const FileDetails = () => {

    const [error, SetError] = useState('')
    const [file, setFile] = useState('')
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3001/get-files/' + id).then((response) => {

            setFile(response.data.data);

        }).catch((error) => {
            return SetError(error.message)
        })

    }, []);



    return (
        <div className='' style={{margin:'auto', marginTop :'200px'}} >
            <div className='flex justify-center'  style={{  marginTop:'100px'}}>
            <img src={file?.url} alt="image" style={{ width: '400px', height: '400px'  , boxShadow:'inherit'}}/>
            <div className='ml-20 space-y-6'>
            <h1 className='text-black' ><b> file name :</b> {file?.file_name}</h1>
            <h1 className='text-black' > <b> file url : </b>{file?.url}</h1>
            <h1 className='text-black' > <b>file folder :</b> {file?.path}</h1>
            <br/>
       <Link to='/get-files'> <Button>back</Button> </Link>    
            </div>
           
            </div>
         
            



        </div>

    )
}

export default FileDetails

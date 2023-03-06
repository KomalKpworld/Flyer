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
        <div className='m-auto text-center bg-gray-300 h-screen' style={{ marginTop: "60px", paddingTop: '10px', paddingBottom: '10px', }}>   <h1 className='font-bold text-6xl mt-12' >Image Details </h1>
            <div className='m-auto rounded-full space-y-5  flex justify-center' style={{ textAlign: 'center', margin: 'auto', marginTop: "100px", }}>
                <div >
                    <div className='flex justify-center space-x-10' style={{ marginTop: '70px' }}>
                        <div>
                            <img src={file?.url} alt="image"
                                style={{ width: '400px', height: '500px' }}
                                className='shadow hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' />
                            <h1 className='text-4xl mt-8' > {file?.file_name}</h1>
                        </div>
                        <div className=''>
                            <h1 className='' ><b> file name :</b> {file?.file_name}</h1>
                            <a href={file?.url} className='' > <b> file url : </b>{file?.url}</a>
                            <h1 className='' > <b>file folder :</b> {file?.path}</h1>
                            <br />
                            <Link to='/get-files'> <Button>back</Button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileDetails

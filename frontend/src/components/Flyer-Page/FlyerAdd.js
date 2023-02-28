import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const FlyerAdd = () => {
    const [id, idChange] = useState("")
    const [image_url, image_urlChange] = useState("")
    const [background_image_url, background_image_urlChange] = useState("")
    const [poster_height, poster_heightChange] = useState("")
    const [poster_width, poster_widthChange] = useState("")
    const [color, colorChange] = useState("")
    const [mode, modeChange] = useState(0)
    const [is_pro, is_proChange] = useState(false)
    const [validation, valChange] = useState(false)
    const navigate = useNavigate();

    const [postData, setPost] = useState({});
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { image_url, background_image_url, poster_height, poster_width, color, mode, is_pro }
        axios.post('http://localhost:3001/create-flyer', data).then((response) => {

            setPost(response.data);
            navigate('/')
        }).catch((error) => {
            return setError(error.message)
        })


    }

    return (
        
            <div style={{ width: '80%', height: '100%', margin: 'auto', marginTop: '150px', }}>

                <div className='mt-40 text-center bg-gray-200 space-x-8' style={{ margin: 'auto', height: '500px', }}>
                    <h1 style={{ marginTop: "50px", paddingTop: '20px', paddingBottom: '20px' }} className='font-bold text-2xl'>
                    Flyer Add
                    </h1>

                    <form onSubmit={handleSubmit} className='text-center' >


                        <div className='col-lg-12  pt-7 pb-7'>
                            <div className='form-group'>
                                <label className='' >
                                    image_url:
                                </label>

                                <input required value={image_url} onMouseDown={e => valChange(true)} onChange={e => image_urlChange(e.target.value)} type="text" name="name" className='outline  ml-3 ' />
                                {!image_url && validation && <span className='text-denger'> Enter the image url</span>}

                                <label className='mt-5 ml-6'>
                                    background_image_url:  </label>
                                <input value={background_image_url} onChange={e => background_image_urlChange(e.target.value)} type="text" name="name" className='outline  ml-3' />

                            </div>
                        </div>

                        <div className='col-lg-12 mt-6 pt-7 pb-7'>
                            <div className='form-group'>
                                <label>
                                    poster_height:    </label>
                                <input value={poster_height} onChange={e => poster_heightChange(e.target.value)} type="text" name="name" className='outline ml-3' />
                                <label className='mt-5 ml-6'>
                                    poster_width:      </label>
                                <input value={poster_width} onChange={e => poster_widthChange(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            </div>
                        </div>

                        <div className='col-lg-12 mt-6 pt-7 pb-7'>
                            <div className='form-group '>
                                <label>
                                    color: </label>
                                <input value={color} onChange={e => colorChange(e.target.value)} type="text" name="name" className='outline  ml-3' />
                                <label className='mt-5 ml-6' >
                                    mode: </label>
                                <input value={mode} onChange={e => modeChange(e.target.value)} type="text" name="name" className='outline  ml-3' />

                            </div>
                        </div>

                        <div className='col-lg-12 pt-7 pb-7'>
                            <div className='form-group mt-6 '>
                                <label className='mt-5 ml-6' >
                                    is_pro:        </label>
                                <input value={is_pro} onChange={e => is_proChange(e.target.value)} type="text" name="name" className='outline  ml-3' />

                            </div>
                        </div>
                        <div className=''>
                            <div className='form-group '>
                                <Button type='submit' >Save</Button>
                                <Button>
                                    <Link to='/' className=''> Back</Link>
                                </Button>

                            </div>
                        </div>

                    </form>
                </div>

            </div>
      
    )
}

export default FlyerAdd



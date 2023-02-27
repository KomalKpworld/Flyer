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

    const [postData, setPost] = useState([]);
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
      const data= { image_url, background_image_url, poster_height, poster_width, color, mode, is_pro }
            axios.post('http://localhost:3001/create-flyer', data).then((response) => {
                setPost(response.data);
                navigate('/')
            }).catch((error) => {
                return setError(error.message)
            })

        console.log(postData.data)
    }

    return (
        <div>
            <h1>
                FlyerAdd
            </h1>
            <form onSubmit={handleSubmit}>
                <div className='col-lg-12 m-12'>
                    <div className='form-group'>
                        <label>
                            image_url:
                        </label>
                        <input required value={image_url} onMouseDown= {e => valChange(true)} onChange={e => image_urlChange(e.target.value)} type="text" name="name" />
                    {image_url.length==0 && validation && <span className='text-denger'> Enter the image url</span>}
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>
                            background_image_url:   </label>
                        <input value={background_image_url} onChange={e => background_image_urlChange(e.target.value)} type="text" name="name" />

                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>
                            poster_height:    </label>
                            <input value={poster_height} onChange={e => poster_heightChange(e.target.value)} type="text" name="name" />
                     
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>
                            poster_width:      </label>
                            <input value={poster_width} onChange={e => poster_widthChange(e.target.value)} type="text" name="name" />
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>
                            color: </label>
                            <input value={color} onChange={e => colorChange(e.target.value)} type="text" name="name" />
                        
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>
                            mode: </label>
                            <input value={mode} onChange={e => modeChange(e.target.value)} type="text" name="name" />
                        
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>
                            is_pro:        </label>
                            <input value={is_pro} onChange={e => is_proChange(e.target.value)} type="text" name="name" />
                    
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <button type='submit'> Save</button>
                        <Link to='/'> Back</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default FlyerAdd



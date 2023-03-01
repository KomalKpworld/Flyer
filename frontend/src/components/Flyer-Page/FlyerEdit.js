import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Table } from '@mui/material'

const FlyerEdit = () => {

    const { flyerId } = useParams();


    const [id, Setid] = useState(null)
    const [image_url, Setimage_url] = useState("")
    const [background_image_url, Setbackground_image_url] = useState("")
    const [poster_height, Setposter_height] = useState("")
    const [poster_width, Setposter_width] = useState("")
    const [color, Setcolor] = useState("")
    const [mode, Setmode] = useState(0)
    const [is_pro, Setis_pro] = useState(false)
    const [validation, Setval] = useState(false)
    const navigate = useNavigate();

    const [postData, SetPost] = useState([]);
    const [error, SetError] = useState('')

    useEffect(() => {
        getFlyer();
    }, []);

    const getFlyer = () => {
        axios.get('http://localhost:3001/get-flyer/' + flyerId).then((result) => {
            let data = result.data.data
            SetPost(result.data.data);
            Setimage_url(data.image_url);
            Setbackground_image_url(data.background_image_url);
            Setposter_height(data.poster_height);
            Setposter_width(data.poster_width);
            Setcolor(data.color);
            Setmode(data.mode);
            Setis_pro(data.is_pro);

        }).catch((error) => {
            return SetError(error.message)
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { image_url, background_image_url, poster_height, poster_width, color, mode, is_pro }
      
        await axios.put(`http://localhost:3001/update-flyer/${flyerId}`, data).then((response) => {
            console.log(response)
            SetPost(response.data);
            navigate('/')
        }).catch((error) => {
            return SetError(error.message)
        })
        console.log(postData.data)
    }

    return (
        <div style={{ width: '80%', height: '100%', margin: 'auto', marginTop: '150px', }}>


            <div className='mt-40 text-center bg-gray-200 space-x-8' style={{ margin: 'auto', height: '500px', }}>
                <h1 style={{ marginTop: "50px", paddingTop: '20px', paddingBottom: '20px' }} className='font-bold text-2xl'>
                    Update Flyer
                </h1>

                <form onSubmit={handleSubmit} className='text-center' >


                    <div className='col-lg-12  pt-7 pb-7'>
                        <div className='form-group'>
                            <label className='' >
                                image_url:
                            </label>

                            <input value={image_url} onChange={e => Setimage_url(e.target.value)} type="text" name="name" className='outline  ml-3 ' />
                            

                            <label className='mt-5 ml-6'>
                                background_image_url:  </label>
                            <input value={background_image_url} onChange={e => Setbackground_image_url(e.target.value)} type="text" name="name" className='outline  ml-3' />

                        </div>
                    </div>

                    <div className='col-lg-12 mt-6 pt-7 pb-7'>
                        <div className='form-group'>
                            <label>
                                poster_height:    </label>
                            <input value={poster_height} onChange={e => Setposter_height(e.target.value)} type="text" name="name" className='outline ml-3' />
                            <label className='mt-5 ml-6'>
                                poster_width:      </label>
                            <input value={poster_width} onChange={e => Setposter_width(e.target.value)} type="text" name="name" className='outline  ml-3' />
                        </div>
                    </div>

                    <div className='col-lg-12 mt-6 pt-7 pb-7'>
                        <div className='form-group '>
                            <label>
                                color: </label>
                            <input value={color} onChange={e => Setcolor(e.target.value)} type="text" name="name" className='outline  ml-3' />
                            <label className='mt-5 ml-6' >
                                mode: </label>
                            <input value={mode} onChange={e => Setmode(e.target.value)} type="text" name="name" className='outline  ml-3' />

                        </div>
                    </div>

                    <div className='col-lg-12 pt-7 pb-7'>
                        <div className='form-group mt-6 '>
                            <label className='mt-5 ml-6' >
                                is_pro:        </label>
                            <input value={is_pro} onChange={e => Setis_pro(e.target.value)} type="text" name="name" className='outline  ml-3' />

                        </div>
                    </div>
                    <div className=''>
                        <div className='form-group '>
                            <Button type='submit' >Update</Button>
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


export default FlyerEdit

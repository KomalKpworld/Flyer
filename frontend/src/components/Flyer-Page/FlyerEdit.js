import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Table } from '@mui/material'

const FlyerEdit = () => {

  const { flyerId } = useParams({});
  

  const [id, idSet] = useState(null)
  const [image_url, image_urlSet] = useState("")
  const [background_image_url, background_image_urlSet] = useState("")
  const [poster_height, poster_heightSet] = useState("")
  const [poster_width, poster_widthSet] = useState("")
  const [color, colorSet] = useState("")
  const [mode, modeSet] = useState(0)
  const [is_pro, is_proSet] = useState(false)
  const [validation, valSet] = useState(false)
  const navigate = useNavigate();

  const [postData, SetPost] = useState([]);
  const [error, SetError] = useState('')

 
  useEffect(() => {
      idSet(localStorage.getItem('id'))
      image_urlSet(localStorage.getItem('image_url'));
      background_image_urlSet(localStorage.getItem('background_image_url'));
      poster_heightSet(localStorage.getItem('poster_height'));
      poster_widthSet(localStorage.getItem('poster_width'));
      colorSet(localStorage.getItem('color'));
      modeSet(localStorage.getItem('mode'));
      is_proSet(localStorage.getItem('is_pro'));


  }, []);
 
 
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {image_url, background_image_url, poster_height, poster_width, color, mode, is_pro }
    console.log(id)
  await  axios.put(`http://localhost:3001/update-flyer/${id}`, data).then((response) => {
    console.log(response)
      SetPost(response.data);
      navigate('/')
    }).catch((error) => {
      return SetError(error.message)
    })
    console.log(postData.data)
  }
  
    return (
      <div style={{ width: '80%',height:'100%' , margin: 'auto', marginTop:'150px', }}>

     
      <div className='mt-40 text-center bg-gray-200 space-x-8' style={{ margin: 'auto', height:'500px', }}>
          <h1 style={{ marginTop: "50px", paddingTop: '20px', paddingBottom: '20px' }} className='font-bold text-2xl'>
              Update Flyer
          </h1>

          <form onSubmit={handleSubmit} className='text-center' >


              <div className='col-lg-12  pt-7 pb-7'>
                  <div className='form-group'>
                      <label className='' >
                          image_url:
                      </label>

                      <input required value={image_url} onMouseDown={e => valSet(true)} onChange={e => image_urlSet(e.target.value)} type="text" name="name" className='outline  ml-3 ' />
                      {!image_url&& validation && <span className='text-denger'> Enter the image url</span>}

                      <label className='mt-5 ml-6'>
                          background_image_url:  </label>
                      <input value={background_image_url} onChange={e => background_image_urlSet(e.target.value)} type="text" name="name" className='outline  ml-3' />

                  </div>
              </div>

              <div className='col-lg-12 mt-6 pt-7 pb-7'>
                  <div className='form-group'>
                      <label>
                          poster_height:    </label>
                      <input value={poster_height} onChange={e => poster_heightSet(e.target.value)} type="text" name="name" className='outline ml-3' />
                      <label className='mt-5 ml-6'>
                          poster_width:      </label>
                      <input value={poster_width} onChange={e => poster_widthSet(e.target.value)} type="text" name="name" className='outline  ml-3' />
                  </div>
              </div>

              <div className='col-lg-12 mt-6 pt-7 pb-7'>
                  <div className='form-group '>
                      <label>
                          color: </label>
                      <input value={color} onChange={e => colorSet(e.target.value)} type="text" name="name" className='outline  ml-3' />
                      <label className='mt-5 ml-6' >
                          mode: </label>
                      <input value={mode} onChange={e => modeSet(e.target.value)} type="text" name="name" className='outline  ml-3' />

                  </div>
              </div>

              <div className='col-lg-12 pt-7 pb-7'>
                  <div className='form-group mt-6 '>
                      <label className='mt-5 ml-6' >
                          is_pro:        </label>
                      <input value={is_pro} onChange={e => is_proSet(e.target.value)} type="text" name="name" className='outline  ml-3' />

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

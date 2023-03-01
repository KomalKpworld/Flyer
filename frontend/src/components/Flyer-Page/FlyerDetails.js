import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const FlyerDetails = () => {
  const { flyerId } = useParams();
  const [flyer, chengeFlyerData] = useState();
  const [error, SetError] = useState('')
  const [postData, SetPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/get-flyer/' + flyerId).then((response) => {
      chengeFlyerData(response.data);

    }).catch((error) => {
      return SetError(error.message)
    })

  }, []);
  console.log(flyer)
  const LoadEdit = (flyer) => {

    navigate('/flyer/edit/' + flyer);
  }

  const LoadRemove = async (flyerId) => {
    axios.delete(`http://localhost:3001/delete-flyer/${flyerId}`);
    const newList = postData?.data?.filter((data) => {
      console.log(data._id)
      return data._id !== flyerId;
    })
    SetPost(newList);
    navigate('/')


  }

  return (

    <div className='mt-40 text-center bg-gray-200 shadow-md rounded-full space-y-5 sm:w-96' style={{ textAlign: 'center', margin: 'auto', marginTop: "100px", width: '50%' }}>
      <h1 style={{ marginTop: "50px", paddingTop: '10px', paddingBottom: '10px' }} className='font-bold text-2xl' >Flyer Details </h1>
      <h1 > flyer id is : <b>{flyer?.data?._id} </b></h1>
      <h1 > flyer image url is:<b>  {(flyer?.data?.image_url)} </b></h1>
      <h1> flyer background image url is: <b>{flyer?.data?.background_image_url}</b></h1>
      <h1>flyer poster height is: <b>{flyer?.data?.poster_height}</b></h1>
      <h1>flyer poster width is: <b>{flyer?.data?.poster_width} </b></h1>
      <h1> flyer color is: <b> {flyer?.data?.color}</b> </h1>
      <h1> flyer mode is: <b>  {flyer?.data?.mode}</b> </h1>
      <h1 style={{marginBottom:'20px'}} >flyer is pro or not is : <b>{flyer?.data?.is_pro} </b></h1>

     

        <a  className='space-y-5 mr-3 text-center bg-green-700 shadow-md rounded-full p-1 ' onClick={() => { LoadEdit(flyer?.data?._id) }}  >
          <Link style={{marginTop:'20px'}} > Edit  </Link> </a>

        <a onClick={() => { LoadRemove(flyer?.data?._id) }} className=' text-center bg-red-700 shadow-md rounded-full p-1 space-y-5 ' >
          <Link style={{marginTop:'20px'}}> Remove</Link></a><br />

      
      <Button>
        <Link to='/'> Back to Listing</Link>
      </Button>
    </div>
  )
}

export default FlyerDetails

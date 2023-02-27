import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const FlyerDetails = () => {
    const {flyerId} = useParams({});
const [flyer,chengeFlyerData] = useState(); 
const [error, setError] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/get-flyer/'+flyerId).then((response) => {
        chengeFlyerData(response.data);

    }).catch((error) => {
      return setError(error.message)
    })

  }, []);
  console.log(flyer)
  return (
    <div style={{textAlign: 'center' , margin: 'auto', marginTop:"100px"}}>
        <h1 >Flyer Details </h1>
        <h1 > flyer id is : <b>{flyer?.data?._id} </b></h1>
      <h1 > flyer image url is: {flyer?.data?.image_url}</h1>
      <h1> flyer background image url is: {flyer?.data?.background_image_url}</h1>
      <h1>flyer poster height is: {flyer?.data?.poster_height}</h1>
      <h1>flyer poster width is: {flyer?.data?.poster_width}</h1>
      <h1> flyer color is: {flyer?.data?.color}</h1>
      <h1> flyer mode is: {flyer?.data?.mode}</h1>  
      <h1>flyer is pro or not is : {flyer?.data?.is_pro}</h1>
      <Link to = '/'> Back to Listing</Link>
      
    </div>
  )
}

export default FlyerDetails

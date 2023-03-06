import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';





const SubFlyerDetails = () => {
    const { subflyerId } = useParams();
    const [subflyer, chengeSubFlyerData] = useState();
    const [error, SetError] = useState('')
    const [postData, SetPost] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/get-subflyer/' + subflyerId).then((response) => {

            chengeSubFlyerData(response.data.data);

        }).catch((error) => {
            return SetError(error.message)
        })

    }, []);
  
    const LoadEdit = (subflyerId) => {
        navigate('/sub-flyer/edit/' + subflyerId);
    }

    const LoadRemove = async (subflyerId) => {
        axios.delete(`http://localhost:3001/delete-subflyer/${subflyerId}`);
        const newList = postData?.data?.filter((data) => {
            console.log(data._id)
            return data._id !== subflyerId;
        })
        SetPost(newList);
        navigate('/sub-flyer')


    }

    return (

        <div className='mt-40 text-center bg-gray-200 shadow-md rounded-800 space-y-3 sm:w-96' style={{ textAlign: 'center', margin: 'auto', marginTop: "100px", width: '50%' }}>
            <h1 style={{ marginTop: "50px", paddingTop: '10px', paddingBottom: '10px' }} className='font-bold text-2xl' >Flyer Details </h1>
            <h1 > Subflyer id is : <b>{subflyer?._id ? subflyer?._id : 'null'} </b></h1>
            <h1 > Type is:<b>  {subflyer?.type ? subflyer?.type : 'null'} </b></h1>
            <h1> Rotation is : <b>{subflyer?.rotation ? subflyer?.rotation : 'null'}</b></h1>
            <h1>Scale: <b>{subflyer?.scale ? subflyer?.scale : 'null'}</b></h1>
            <h1>Is_flipped: <b>{subflyer?.is_flipped ? subflyer?.is_flipped : 'null'} </b></h1>
            <h1> Is_lock: <b> {subflyer?.is_lock ? subflyer?.is_lock : 'null'}</b> </h1>
            <h1> x: <b>  {subflyer?.x ? subflyer?.x : 'null'}</b> </h1>
            <h1 > y : <b>{subflyer?.y ? subflyer?.y : 'null'} </b></h1>
            <h1 > Height: <b>{subflyer?.height ? subflyer?.height : 'null'} </b></h1>
            <h1 > Width: <b>{subflyer?.width ? subflyer?.width : 'null'} </b></h1>
            <h1 > Order_by : <b>{subflyer?.order_by ? subflyer?.order_by : 'null'} </b></h1>
            <h1 > <b>Font Details:</b> Font Name is  : <b>{subflyer?.font?.font_name ? subflyer?.font?.font_name : 'null'} </b>,
                Font Name is  : <b>{subflyer?.font?.font_name ? subflyer?.font?.font_name : 'null'} </b>,  </h1>
            <h1>  Font Size is  : <b>{subflyer?.font?.font_size ? subflyer?.font?.font_size : 'null'} </b>,
                Font Color is : <b>{subflyer?.font?.font_color ? subflyer?.font?.font_color : 'null'}</b></h1>

            <h1 > Font Align : <b>{subflyer?.font?.font_align ? subflyer?.font?.font_align : 'null'} </b> ,
                Font is bold or not : <b>{subflyer?.font?.is_bold ? subflyer?.font?.is_bold : 'null'} </b></h1>
            <h1 > Font is underline : <b>{subflyer?.font?.is_underline ? subflyer?.font?.is_underline : 'null'} </b>,
                Font letter_spacing : <b>{subflyer?.font?.letter_spacing ? subflyer?.font?.letter_spacing : 'null'} </b></h1>
            <h1 > Font file is  : <b>{subflyer?.font?.font_file ? subflyer?.font?.font_file : 'null'} </b>,
                File font is  : <b>{subflyer?.font?.file_font ? subflyer?.font?.file_font : 'null'} </b></h1>

            <h1 > Font font_vertical_spacing : <b>{subflyer?.font_vertical_spacing ? subflyer?.font_vertical_spacing : 'null'} </b></h1>
            <h1 > Text: <b>{subflyer?.text ? subflyer?.text : 'null'} </b></h1>
            <h1 style={{ marginBottom: '20px' }} > Image Url: <b>{subflyer?.image_url ? subflyer?.image_url : 'null'} </b></h1>

            <a className='space-y-5 mr-3 text-center bg-green-700 shadow-md rounded-full p-1 ' onClick={() => { LoadEdit(subflyer?._id) }}  >
                <Link style={{ marginTop: '20px' }} > Edit  </Link> </a>

            <a onClick={() => { LoadRemove(subflyer?._id) }} className=' text-center bg-red-700 shadow-md rounded-full p-1 space-y-5 ' >
                <Link style={{ marginTop: '20px' }}> Remove</Link></a><br />


            <Button>
                <Link to='/sub-flyer'> Back to Listing</Link>
            </Button>
        </div>
    )
}

export default SubFlyerDetails

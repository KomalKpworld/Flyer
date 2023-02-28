import React, { useState, useEffect, Fragment } from 'react'
import axios from "axios";
import { Button, Table } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';



const Flyerpage = () => {
  const [postData, SetPost] = useState([]);
  const [error, SetError] = useState('')
  const navigate = useNavigate();
  const LoadDetails = (id) => {
    navigate('/flyer/details/' + id);
  }

  const LoadEdit = (id) => {
    localStorage.setItem('id', id)
    navigate('/flyer/edit/' + id);
  }

  const LoadRemove = async (id) => {
  axios.delete(`http://localhost:3001/delete-flyer/${id}`);

  const newList = postData?.data?.filter((data)=>{
    console.log(data._id)
   return data._id !== id;
  })

 SetPost(newList);

   
  }


  useEffect(() => {
    axios.get('http://localhost:3001/get-flyer-list').then((response) => {
      SetPost(response.data);

    }).catch((error) => {
      return SetError(error.message)
    })

  }, []);
  console.log(postData.data)


  return (

    <div style={{ marginTop: '60px', textAlign: 'center' }} className='text-sm'>

      <Link to="flyer/create" className='top-36 bottom-36' style={{ marginTop: '30px', marginBottom: '30px' }} > Add New (+)</Link>


      <Table className='border-collapse border border-slate-400 ...' style={{ marginLeft: '10px', marginRight: '50px', marginTop: '10px' }}>

        <thead >
          <tr>
            <th className='border border-slate-400 ...'>
              _id
            </th>
            <th className='border border-slate-400 ...'>
              image_url
            </th>
            <th className='border border-slate-400 ...'>
              background_image_url
            </th>
            <th className='border border-slate-400  ...'>
              poster_height
            </th>
            <th className='border border-slate-400  ...'>
              poster_width
            </th>
            <th className='border border-slate-400 ...'>
              color
            </th>
            <th className='border border-slate-400  ...'>
              mode
            </th>
            <th className='border border-slate-400 ...'>
              is_pro
            </th>
            <th className='border border-slate-300 ...'>
              Actions
            </th>

          </tr>
        </thead>

        <tbody >
          {
            postData?.data && postData?.data?.length > 0 ?
              postData?.data?.map((data) => {
                return (
                  <tr key={data?._id}>
                    <td className='border border-slate-400 ...'>
                      {data?._id}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.image_url}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.background_image_url}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.poster_height}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.poster_width}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.color}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.mode}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data.is_pro}
                    </td>
                    <td className='border border-slate-400 ...'>
                      <a onClick={() => { LoadEdit(data?._id) }} className='btn btn-success' >
                        <Link to='/flyer/edit/:flyerId'>Edit </Link></a> <br />

                      <a onClick={() => { LoadRemove(data?._id) }} className='btn btn-success'>
                        <Link> Remove</Link></a><br />


                      <a onClick={() => { LoadDetails(data?._id) }} lassName='btn btn-success'>
                        <Link> Details </Link></a>


                    </td>

                  </tr>
                )
              }) : " No Data Available"
          }
        </tbody>
      </Table>

    </div>

    
  )
}

export default Flyerpage






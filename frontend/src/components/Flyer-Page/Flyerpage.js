import React, { useState, useEffect, Fragment } from 'react'
import axios from "axios";
import { Button, Table } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';



const Flyerpage = () => {
  const [postData, setPost] = useState([]);
  const [error, setError] = useState('')
const navigate= useNavigate();
 const LoadDetails=(id)=>{
  navigate('/flyer/details/'+id);
 }

 const LoadEdit=(id)=>{
  navigate('/flyer/edit/'+id);
 }

 const LoadRemove=(id)=>{
  navigate('/flyer/delete/'+id);
 }


  useEffect(() => {
    axios.get('http://localhost:3001/get-flyer-list').then((response) => {
      setPost(response.data);

    }).catch((error) => {
      return setError(error.message)
    })

  }, []);
  console.log(postData.data)


  return (

    <>
      <Link to="flyer/create"> Add New (+)</Link>
      <div style={{ margin: '10px' }}>

        <Table striped boarderd='true' size="sm">

          <thead className='bg-dark text-white'>
            <tr>
              <th>
                _id
              </th>
              <th>
                image_url
              </th>
              <th>
                background_image_url
              </th>
              <th>
                poster_height
              </th>
              <th>
                poster_width
              </th>
              <th>
                color
              </th>
              <th>
                mode
              </th>
              <th>
                is_pro
              </th>
              <th>
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
                      <td>
                        {data?._id}
                      </td>
                      <td>
                        {data?.background_image_url}
                      </td>
                      <td>
                        {data?.image_url}
                      </td>
                      <td>
                        {data?.color}
                      </td>
                      <td>
                        {data?.poster_height}
                      </td>
                      <td>
                        {data?.poster_width}
                      </td>
                      <td>
                        {data?.mode}
                      </td>
                      <td >
                        {data.is_pro}
                      </td>
                      <td><a onClick={() => { LoadEdit(data?._id) }} className='btn btn-success' >
                        <Link to='/flyer/edit/:flyerId'>Edit </Link></a>
                        <a onClick={() => { LoadRemove(data?._id) }} className='btn btn-success'>Remove</a>
                        <a onClick={() => { LoadDetails(data?._id) }} lassName='btn btn-success'>Details</a>
                      </td>

                    </tr>
                  )
                }) : " No Data Available"
            }
          </tbody>
        </Table>

      </div>

    </>
  )
}

export default Flyerpage






import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Table } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../Flyer-Subpage/Pagination';
import { Search as SearchIcon } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';
const Flyerpage = () => {
  const [postData, SetPost] = useState([]);
  const [error, SetError] = useState('')
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(10)
  const [value, setValue] = useState('')
  const lastPostIndex = currentPage * postsPerPage;
  const fristpostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postData.slice(fristpostIndex, lastPostIndex)
  const [dataSource, setDataSource] = useState(currentPosts)
  const [image_url, Setimage_url] = useState('')
  const [color, SetColor] = useState('')

  const LoadDetails = (id) => {
    navigate('/flyer/details/' + id);
  }
  const LoadEdit = (id) => {
    navigate('/flyer/edit/' + id);
  }
  const LoadRemove = async (id) => {
    axios.delete(`http://localhost:3001/delete-flyer/${id}`);
    getFlyerList();
  }
  function getFlyerList() {
    axios.get('http://localhost:3001/get-flyer-list').then((response) => {
      console.log(response)
      SetPost(response.data.data);

    }).catch((error) => {
      return SetError(error.message)
    })
  }

  useEffect(() => {
    getFlyerList();
  }, []);

  return (

    <div style={{ marginTop: '80px', textAlign: 'center' }} className='text-sm'>
      <Link to="flyer/create" className=' float-left ml-16 bg-blue-500 space-x-6 space-y-28 text-2xl text-white' style={{ marginTop: '20px', marginBottom: '30px' }} > Add New (+)</Link>
     
      <label htmlFor="search-form">
          <TextField
            type="search"
            onChange={(e) => (Setimage_url(e.target.value) || SetColor(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
         
        </label>
      
       
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
            currentPosts?.length > 0 ? currentPosts.filter((value) => {
              console.log(value.color)
              if (((image_url === '') || (color === ''))) {
                return value;
              } else if ((value.image_url.toLowerCase().includes(image_url.toLowerCase())) || (value.color.toLowerCase().includes(color.toLowerCase()))) {
                return value;
              }
            })
              .map((data) => {
                return (
                  <tr key={data?._id}>
                    <td className='border border-slate-400 ...'>
                      {data?._id ? data?._id : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.image_url ? data?.image_url : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.background_image_url ? data?.background_image_url : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.poster_height ? data?.poster_height : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.poster_width ? data?.poster_width : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.color ? data?.color : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.mode ? data?.mode : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.is_pro ? data?.mode : 'false'}
                    </td>
                    <td className='border border-slate-400 ... mb-3'>
                      <a onClick={() => { LoadEdit(data?._id) }} >
                        <Link to='/flyer/edit/:flyerId' className='bg-green-500 text-white p-0.3 mb-5'>Edit </Link></a> <br />
                      <a onClick={() => { LoadDetails(data?._id) }} >
                        <Link className='bg-blue-500 text-white p-0.3'> Details </Link></a> <br />

                      <a onClick={() => { LoadRemove(data?._id) }}>
                        <Link className='bg-red-500 text-white p-0.3'> Remove</Link></a><br />
                    </td>
                  </tr>
                )
              }) :
              dataSource.map((data) => {
                return (
                  <tr key={data?._id}>
                    <td className='border border-slate-400 ...'>
                      {data?._id ? data?._id : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.image_url ? data?.image_url : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.background_image_url ? data?.background_image_url : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.poster_height ? data?.poster_height : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.poster_width ? data?.poster_width : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.color ? data?.color : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.mode ? data?.mode : 'null'}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.is_pro ? data?.mode : 'false'}
                    </td>
                    <td className='border border-slate-400 ... mb-3'>
                      <a onClick={() => { LoadEdit(data?._id) }} >
                        <Link to='/flyer/edit/:flyerId' className='bg-green-500 text-white p-0.3 mb-5'>Edit </Link></a> <br />
                      <a onClick={() => { LoadDetails(data?._id) }} >
                        <Link className='bg-blue-500 text-white p-0.3'> Details </Link></a> <br />
                      <a onClick={() => { LoadRemove(data?._id) }}>
                        <Link className='bg-red-500 text-white p-0.3'> Remove</Link></a><br />
                    </td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
      <Pagination
        totalPosts={postData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Flyerpage






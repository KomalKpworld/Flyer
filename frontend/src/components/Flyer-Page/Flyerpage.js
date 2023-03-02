import React, { useState, useEffect, Fragment } from 'react'
import axios from "axios";
import { Button, Table } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';

const Flyerpage = () => {
  const [postData, SetPost] = useState([]);
  const [error, SetError] = useState('')
  const navigate = useNavigate();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const LoadDetails = (id) => {
    navigate('/flyer/details/' + id);
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.postData?.data, 10));
    setPage(0);
  };

  const LoadEdit = (id) => {
    navigate('/flyer/edit/' + id);
  }

  const LoadRemove = async (id) => {
  axios.delete(`http://localhost:3001/delete-flyer/${id}`);
  getFlyerList();
  }

  function getFlyerList(){
    axios.get('http://localhost:3001/get-flyer-list').then((response) => {
      SetPost(response.data);

    }).catch((error) => {
      return SetError(error.message)
    })
  }

  useEffect(() => {
  getFlyerList();
  }, []);
 

const Search = ()=>{
  console.log("jhgukh")
}
  return (

    <div style={{ marginTop: '80px', textAlign: 'center' }} className='text-sm'>

      <Link to="flyer/create" className=' float-left ml-16 bg-blue-500 space-x-6 space-y-28 text-2xl text-white' style={{ marginTop: '20px', marginBottom: '30px' }} > Add New (+)</Link>
      <div className='border-2 w-52 h-9 text-center flex' style={{margin:'auto'}}>
      <input value='' onChange={()=>{}} type="search" placeholder='search for data' name="name"  /> 
      <span className='mt-2 ml-2.5 '>    <SearchIcon/> </span>
      </div>
     


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
              }) : " No Data Available"
          }
        </tbody>
      </Table>
      <TablePagination
      component="div"
      count={postData.count}
      page={postData.offset}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </div>

    
  )
}

export default Flyerpage






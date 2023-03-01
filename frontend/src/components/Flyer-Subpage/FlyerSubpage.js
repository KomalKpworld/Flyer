import React, { useState, useEffect, Fragment } from 'react'
import axios from "axios";
import { Button, Table } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';

const FlyerSubpage = () => {
  const [postData, SetPost] = useState([]);
  const [error, SetError] = useState('')
  const navigate = useNavigate();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const LoadDetails = (id) => {
    navigate('/sub-flyer/details/' + id);
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.postData?.data, 10));
    setPage(0);
  };

  const LoadEdit = (id) => {
    navigate('/sub-flyer/edit/' + id);
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
    axios.get('http://localhost:3001/get-subflyer-list').then((response) => {
      console.log(response?.data.data)
      SetPost(response.data.data);

    }).catch((error) => {
      return SetError(error.message)
    })

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
              flyerId
            </th>
            <th className='border border-slate-400 ...'>
              type
            </th>
            <th className='border border-slate-400 ...'>
              rotation
            </th>
            <th className='border border-slate-400  ...'>
              scale
            </th>
            <th className='border border-slate-400  ...'>
              is_flipped
            </th>
            <th className='border border-slate-400 ...'>
              is_lock
            </th>
            <th className='border border-slate-400  ...'>
              x
            </th>
            <th className='border border-slate-400 ...'>
              y
            </th>
            <th className='border border-slate-400 ...'>
              height
            </th>
            <th className='border border-slate-400 ...'>
              width
            </th>
            <th className='border border-slate-400 ...'>
              order_by
            </th>
            <th className='border border-slate-400 ...'>
            font_name
            </th>
            <th className='border border-slate-400 ...'>
            font_size
            </th>
            <th className='border border-slate-400 ...'>
            font_color
            </th>
            <th className='border border-slate-400 ...'>
            font_align
            </th>

            <th className='border border-slate-400 ...'>
            is_bold
            </th>

            <th className='border border-slate-400 ...'>
            is_underline
            </th>

            <th className='border border-slate-400 ...'>
            letter_spacing
            </th>
            <th className='border border-slate-400 ...'>
            font_file
            </th>

            <th className='border border-slate-400 ...'>
            file_font
            </th>

            <th className='border border-slate-400 ...'>
              font_vertical_spacing
            </th>
            <th className='border border-slate-400 ...'>
              text
            </th>
            <th className='border border-slate-400 ...'>
              image_url
            </th>

            <th className='border border-slate-300 ...'>
              Actions
            </th>

          </tr>
        </thead>

        <tbody >
          {
            postData && postData?.length > 0 ?
              postData?.map((data) => {
                return (
                  <tr key={data?._id}>
                    <td className='border border-slate-400 ...'>
                      {data?._id}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.flyerId}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.type}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.rotation}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.scale}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.is_flipped}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.is_lock}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.x}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data.y}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data.height}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data.width}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data.order_by}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.font?.font_name
                      }
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.font?.font_size
                      }
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.font?.font_color}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.font?.font_align
                      }
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.font?.is_bold
                      }
                    </td>
                    
                    <td className='border border-slate-400 ...'>
                      {data?.font?.is_underline
                      }
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.font?.letter_spacing
                      }
                    </td>  
                    <td className='border border-slate-400 ...'>
                      {data?.font?.font_file
                      }
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data?.font?.file_font
                      }
                    </td>
                   
                  
                    <td className='border border-slate-400 ...'>
                      {data.font_vertical_spacing}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data.text}
                    </td>
                    <td className='border border-slate-400 ...'>
                      {data.image_url}
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
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </div>

    
  )
}

export default FlyerSubpage








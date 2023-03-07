import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Table } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import { Search as SearchIcon } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';


const FlyerSubpage = () => {
  const [postData, SetPost] = useState([]);
  const navigate = useNavigate();
  const [error, SetError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(10)
  const lastPostIndex = currentPage * postsPerPage;
  const fristpostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postData.slice(fristpostIndex, lastPostIndex)
  const [dataSource, setDataSource] = useState(currentPosts)
  const [flyerId, setFlyerId] = useState('')
  const [type, setType] = useState('')
  const [text, setText] = useState('')
  const [select, setSelect] = useState('choose');
  const [flyerData, setFlyerData] = useState([])
  useEffect(() => {
    getFLyer()
  }, []);
  function getFLyer() {
    axios.get('http://localhost:3001/get-flyer-list').then((response) => {
      setFlyerData(response.data.data);
    }).catch((error) => {
      return SetError(error.message)
    })
  }
  const LoadEdit = (id) => {
    navigate('/sub-flyer/edit/' + id);
  }
  const LoadDetails = (id) => {
    navigate('/sub-flyer/details/' + id);
  }
  const LoadRemove = async (id) => {
    axios.delete(`http://localhost:3001/delete-subflyer/${id}`);
    getSubFLyer()
  }
  useEffect(() => {
    getSubFLyer()
  }, []);
  function getSubFLyer() {
    axios.get('http://localhost:3001/get-subflyer-list').then((response) => {
      SetPost(response.data.data);
    }).catch((error) => {
      return SetError(error.message)
    })
  }
  return (
    <div style={{ marginTop: '80px', textAlign: 'center' }} className='text-sm'>
      <div>
        <Link to="/sub-flyer/create"
          className=' float-left ml-16 bg-blue-500 space-x-6 space-y-28 text-2xl text-white flex'
          style={{ marginTop: '20px', marginBottom: '30px' }}>
          Add New (+)
        </Link>

      </div>
      <div>
        <select type='search' value={select} onChange={e => setSelect(e.target.value)} >
          <option>choose</option>
          {
            flyerData.length > 0 ? flyerData.map((data) => {
              return (
                <option key={data._id}> {data._id}</option>
              )
            })
              : 'null'
          }
        </select>
      </div>
      <div>
        <label htmlFor="search-form">
          <TextField
            type="search"
            onChange={(e) => ((setFlyerId(e.target.value) || setType(e.target.value)) )}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
          <span className="sr-only">Search countries here</span>
        </label>
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
        <tbody> {currentPosts.length > 0 ? postData?.filter((value) => {
          console.log(value)
          if (select === 'choose') {
            return value
          }
          else if (select === value.flyerId) {
            return value
          }       
        }).map((data) => {
          return (
            <tr key={data?._id}>
              <td className='border border-slate-400 ...'>
                {data?._id ? data?._id : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.flyerId ? data?.flyerId : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.type ? data?.type : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.rotation ? data?.rotation : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.scale ? data?.scale : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.is_flipped ? data?.is_flipped : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.is_lock ? data?.is_lock : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.x ? data?.x : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.y ? data.y : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.height ? data.height : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.width ? data.width : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.order_by ? data.order_by : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_name ? data?.font?.font_name : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_size ? data?.font?.font_size : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_color ? data?.font?.font_color : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_align ? data?.font?.font_align : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.is_bold ? data?.font?.is_bold : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.is_underline ? data?.font?.is_underline : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.letter_spacing ? data?.font?.letter_spacing : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_file ? data?.font?.font_file : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.file_font ? data?.font?.file_font : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data.font_vertical_spacing ? data.font_vertical_spacing : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.text ? data.text : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.image_url ? data.image_url : 'null'}
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
        }) : dataSource.map((data) => {
          return (
            <tr key={data?._id}>
              <td className='border border-slate-400 ...'>
                {data?._id ? data?._id : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.flyerId ? data?.flyerId : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.type ? data?.type : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.rotation ? data?.rotation : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.scale ? data?.scale : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.is_flipped ? data?.is_flipped : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.is_lock ? data?.is_lock : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.x ? data?.x : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.y ? data.y : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.height ? data.height : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.width ? data.width : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.order_by ? data.order_by : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_name ? data?.font?.font_name : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_size ? data?.font?.font_size : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_color ? data?.font?.font_color : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_align ? data?.font?.font_align : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.is_bold ? data?.font?.is_bold : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.is_underline ? data?.font?.is_underline : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.letter_spacing ? data?.font?.letter_spacing : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.font_file ? data?.font?.font_file : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data?.font?.file_font ? data?.font?.file_font : 'null'
                }
              </td>
              <td className='border border-slate-400 ...'>
                {data.font_vertical_spacing ? data.font_vertical_spacing : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.text ? data.text : 'null'}
              </td>
              <td className='border border-slate-400 ...'>
                {data.image_url ? data.image_url : 'null'}
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
        })}
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
export default FlyerSubpage







// .currentPosts.filter((value) => {

//   if ((flyerId === '') || (type === '') ) {
//     return value;
//   } else if (((value.flyerId === flyerId) || (value.type === type)) ) {
//     return value;
//   }
import React, { useState, useEffect, Fragment } from 'react'
import axios from "axios";
import { Button, Table } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import Search from './Search';


const FlyerSubpage = () => {
  const [postData, SetPost] = useState([]);

  const navigate = useNavigate();
  const [error, SetError] = useState('')
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage, setPostPerPage] = useState(5)
const [value, setValue] = useState('')
const lastPostIndex = currentPage * postsPerPage;
const fristpostIndex = lastPostIndex - postsPerPage;
const currentPosts = postData.slice(fristpostIndex , lastPostIndex)
const [dataSource, setDataSource] = useState(currentPosts)
const [tableFilter , setTableFilter] = useState()

  const LoadEdit = (id) => {
    console.log(id)
    navigate('/sub-flyer/edit/' + id);
  }
  const LoadDetails = (id) => {
    navigate('/sub-flyer/details/' + id);
  }
  const LoadRemove = async (id) => {
    console.log(id)
    axios.delete(`http://localhost:3001/delete-subflyer/${id}`); 
    getSubFLyer()

  }
  useEffect(() => {
    getSubFLyer()
  }, []);

  function getSubFLyer(){
    axios.get('http://localhost:3001/get-subflyer-list').then((response) => {
      console.log(response?.data)
     
      SetPost(response.data.data);

    }).catch((error) => {
      return SetError(error.message)
    })
  }

  function getflyerId (){
  const  id = axios.get('http://localhost:3001/get-subflyer/flyer/:flyerId')
  console.log(id)

  }
 console.log(dataSource)
//  const filterData =(e) =>{
//   if(e.target.value != ''){
//     setValue(e.target.value)
//     const filterTable = dataSource.filter(o => Object.keys(o).some(k=> 
//       String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())))
//       setTableFilter([...filterTable])
//   }else{
//     setValue(e.target.value);
//     setDataSource([...dataSource])
//   }
//  }
 
  return (

    <div style={{ marginTop: '80px', textAlign: 'center' }} className='text-sm'>

       <div> <Link to="/sub-flyer/create" className=' float-left ml-16 bg-blue-500 space-x-6 space-y-28 text-2xl text-white flex' style={{ marginTop: '20px', marginBottom: '30px' }} > Add New (+)  </Link></div>
       <div>
            
            <input
                style={{ width: "30%", height: "30px" }}
                type='text'
                placeholder='Search'
                value={value}
                onChange={getflyerId}
            />
        
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

        <tbody  > {currentPosts.length>0 ? currentPosts.map((data) => {

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
              })
         :
         dataSource.map((data) => {

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
        })
          }
        </tbody>
      </Table>
      <Pagination
      totalPosts={postData.length} 
       postsPerPage={postsPerPage}
       setCurrentPage= {setCurrentPage}
       currentPage ={currentPage}
       />

    </div>


  )
}

export default FlyerSubpage








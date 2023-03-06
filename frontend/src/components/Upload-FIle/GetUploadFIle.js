import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../Flyer-Subpage/Pagination';
const GetUploadFIle = () => {
    const [postData, SetPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(18)
    const navigate = useNavigate();
    const lastPostIndex = currentPage * postsPerPage;
    const fristpostIndex = lastPostIndex - postsPerPage;
    const currentPosts = postData.slice(fristpostIndex, lastPostIndex)
    const [error, SetError] = useState('')

   const LoadDetails = (id) => {
        console.log(id)
        navigate('/get-files/' + id);
      }    
    const LoadRemove = async (id) => {
        console.log(id)
        axios.delete(`http://localhost:3001/delete-files/${id}`);
        navigate('/');
    }   
    useEffect(() => {
        getSubFLyer()
    }, []);

    function getSubFLyer() {
        axios.get('http://localhost:3001/get-files').then((response) => {

            SetPost(response.data.data);

        }).catch((error) => {
            return SetError(error.message)
        })
    }
    console.log(postData.length)
    return (
        <div style={{ marginTop: '80px', textAlign: 'center' }} className='text-sm'>
            <div> <Link to="/upload-files" className=' float-left ml-16 bg-blue-500 space-x-6 space-y-28 text-2xl text-white flex p-3 rounded-full' style={{ marginTop: '20px', marginBottom: '30px' }} > Upload Files  </Link></div>
            <div>

                <input
                    style={{ width: "30%", height: "30px" }}
                    type='text'
                    placeholder='Search'
                />
            </div>
            <div className=' grid grid-cols-5 gap-6 items-center text-center ' style={{ margin: 'auto', marginTop: '60px' }}>
                {currentPosts.length > 0 ?
                    currentPosts.map((data) => {
                        return <div className='border-transparant ' key={data?._id}>
                            <img src={data?.url} alt="image" />
                            <h1 className='mt-4'>{data?.file_name}</h1>
                      <div className='flex justify-center space-x-3'>                      
                                <p className='bg-blue-500 text-white p-0.5' onClick={() => { LoadDetails(data?._id) }} >
                                    <Link > details</Link></p>
                                <p onClick={() => { LoadRemove(data?._id) }}>
                                    <Link className='bg-red-500 text-white p-0.5'> delete</Link></p>
                            </div>
                        </div>
                    }) : "no data available"
                }
            </div>
            <Pagination
                totalPosts={postData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}
export default GetUploadFIle;
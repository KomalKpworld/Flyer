
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const UploadFIles = () => {
  const [parentFlyer, setParentFlyer] = useState({})
  const [subFlyer, setSubFlyer] = useState({})
  const [fontFlyer, setFontFlyer] = useState({})
  const [backgroundFlyer, setBackgroundFlyer] = useState({})
  const [error, setError] = useState({})
  const [parentflyerfile, setParentFlyerFile] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoding] = useState(false)
  const [backgroundflyerfile, setBackgroundFlyerFile] = useState('')
  const [subflyerfile, setSubFlyerFile] = useState('')
  const [fontflyerfile, setFontFlyerFile] = useState('')

  const parentFileupload = () => {
    let formData = new FormData()
    formData.append('image', parentflyerfile)
    console.log("wait file is uploades")
    setLoding('wait file is uploaded')
    axios.post('http://localhost:3001/upload-flyer-parent-image', formData).then((response) => {
      setLoding("wait file is uploades")
      setParentFlyer(response.data);
      if (response.data.status === true) {

        setMsg("file upload success fully")
      }
    }).catch((error) => {
      return setError(error.message)
    })
  }

  const backgroundFileUpload = () => {
    let formData = new FormData()
    formData.append('image', backgroundflyerfile)

    setLoding('wait file is uploaded')
    axios.post('http://localhost:3001/upload-background-image', formData).then((response) => {
      setLoding("wait file is uploades")
      setBackgroundFlyer(response.data);
      if (response.data.status === true) {

        setMsg("file upload success fully")
      }
    }).catch((error) => {
      return setError(error.message)
    })
  }
  const subFlyerFileUpload= () => {
    let formData = new FormData()
    formData.append('image',subflyerfile)
    console.log("wait file is uploades")
    setLoding('wait file is uploaded')
    axios.post('http://localhost:3001/upload-subflyer-image', formData).then((response) => {
      setLoding("wait file is uploades")
      subFlyer(response.data);
      if (response.data.status === true) {

        setMsg("file upload success fully")
      }
    }).catch((error) => {
      return setError(error.message)
    })
  }

  const fontFileUpload = () => {
    let formData = new FormData()
    formData.append('image', fontflyerfile)
    console.log("wait file is uploades")
    setLoding('wait file is uploaded')
    axios.post('http://localhost:3001/upload-font', formData).then((response) => {
      setLoding("wait file is uploades")
      fontFlyer(response.data);
      if (response.data.status === true) {

        setMsg("file upload success fully")
      }
    }).catch((error) => {
      return setError(error.message)
    })
  }




  return (
    <div className="mt-20">
      <h1 className="text-center font-bold text-5xl"> Upload files here</h1>
      <form onSubmit={()=>{}} className="mt-12 text-center">
        <div>
          <h1>{loading}</h1>
          <h1>{msg}</h1>
          <lable className="font-bold text-2xl p-8 m-4"> Parent Flyer Image upload</lable>
          <input
            type='file'
            className="form-control"
            onChange={(e) => setParentFlyerFile(e.target.files[0])}
            placeholder='fileupload' />
          <Button className="mr-16" onClick={parentFileupload} >upload</Button>
        </div>

        <div>
          <h1>{loading}</h1>
          <h1>{msg}</h1>
          <lable className="font-bold text-2xl p-8 m-4"> Background Image Upload</lable>
          <input
            type='file'
            className="form-control"
            onChange={(e) => setBackgroundFlyerFile(e.target.files[0])}
            placeholder='fileupload' />
          <Button className="mr-16" onClick={backgroundFileUpload} >upload</Button>
        </div>
        <div>
          <h1>{loading}</h1>
          <h1>{msg}</h1>
          <lable className="font-bold text-2xl p-8 m-4">Font Upload</lable>
          <input
            type='file'
            className="form-control ml-40"
            onChange={(e) => setFontFlyerFile(e.target.files[0])}
            placeholder='fileupload' />
          <Button className="mr-16" onClick={fontFileUpload} >upload</Button>
        </div>
        <div>
          <h1>{loading}</h1>
          <h1>{msg}</h1>
          <lable className="font-bold text-2xl p-8 m-4"> Subflyer Image uplaod</lable>
          <input
            type='file'
            className="form-control ml-30"
            onChange={(e) =>setSubFlyerFile(e.target.files[0])}
            placeholder='fileupload'
            style={{ marginLeft: '40px' }} />
          <Button className="mr-16" onClick={subFlyerFileUpload} >upload</Button>
        </div>
      </form>
      <div class=" flex  justify-center space-x-6">
      <Link to='/get-files'> <button className="bg-green-900 text-white hover:bg-green-400 font-bold py-2 px-4 mt-3 rounded items-center">submit</button> </Link>  
    <Link to='/get-files'> <button className="bg-blue-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">Back</button></Link>  
      </div>



    </div>
  )
}

export default UploadFIles



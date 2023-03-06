
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
  const [upload, setUploaded] = useState(null)
  const [msgBg, setMsgBg] = useState('')
  const [msgSubFlyer, setMsgSubFlyer] = useState('')
  const [msgFont, setMsgFont] = useState('')
  const [uploadBg, setUploadBg] = useState(null)
  const [uploadSubFlyer, setUploadSubFlyer] = useState(null)
  const [uploadFont, setUploadFont] = useState(null)

  const onSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove())
  }

  const parentFileupload = () => {
    let formData = new FormData()
    formData.append('image', parentflyerfile)
    axios.post('http://localhost:3001/upload-flyer-parent-image', formData, {
      onUploadProgress: (data) => {
        setUploaded(Math.round((data.loaded / data.total) * 100))
      }
    }).then((response) => {
      setMsg("file upload success fully")
    }).catch((error) => {
      return setError(error.message)
    })
  }

  const backgroundFileUpload = () => {
    let formData = new FormData()
    formData.append('image', backgroundflyerfile)

    setLoding('wait file is uploaded')
    axios.post('http://localhost:3001/upload-background-image', formData, {
      onUploadProgress: (data) => {
        setUploadBg(Math.round((data.loaded / data.total) * 100))
      }
    }).then((response) => {
      setMsgBg("file upload success fully")
    }).catch((error) => {
      return setError(error.message)
    })
  }
  const subFlyerFileUpload = () => {
    console.log("kkh")
    let formData = new FormData()
    console.log("2")
    formData.append('image', subflyerfile)
    console.log("wait file is uploades")
    setLoding('wait file is uploaded')
    axios.post('http://localhost:3001/upload-subflyer-image', formData, {
      onUploadProgress: (data) => {
        setUploadSubFlyer(Math.round((data.loaded / data.total) * 100))
      }
    }).then((response) => {
      setMsgSubFlyer("file upload success fully")
    }).catch((error) => {
      return setError(error.message)
    })
  }

  const fontFileUpload = () => {
    let formData = new FormData()
    formData.append('image', fontflyerfile)
    console.log("wait file is uploades")
    setLoding('wait file is uploaded')
    axios.post('http://localhost:3001/upload-font', formData, {
      onUploadProgress: (data) => {
        setUploadFont(Math.round((data.loaded / data.total) * 100))
      }
    }).then((response) => {
      setMsgFont("file upload success fully")
    }).catch((error) => {
      return setError(error.message)
    })
  }

  return (
    <div className="mt-20">
      <h1 className="text-center font-bold text-5xl"> Upload files here</h1>
      <form onSubmit={() => { }} className="mt-12 text-center">
        <div>
          <lable className="font-bold text-2xl p-8 m-4"> Parent Flyer Image upload</lable>
          <input
            type='file'
            className="form-control"
            onChange={(e) => setParentFlyerFile(e.target.files[0])}
            placeholder='fileupload' />
          <Button className="mr-16" onClick={parentFileupload} >upload</Button> <br />
          {upload &&
            <div className="progress mt-2 bg-blue-400 w-96 h-5  rounded-2xl m-auto">
              <div className="'progress-bar"
                role='progressbar'
                aria-value={upload}
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: `${upload}%` }}>
                {`${upload}%`}
              </div>
              <h1 className="">{msg}</h1>
            </div>}
        </div>
        <div className="mt-8">
          <lable className="font-bold text-2xl p-8 m-4"> Background Image Upload</lable>
          <input
            type='file'
            className="form-control"
            onChange={(e) => setBackgroundFlyerFile(e.target.files[0])}
            placeholder='fileupload' />
          <Button className="mr-16" onClick={backgroundFileUpload} >upload</Button>
          {upload &&
            <div className="progress mt-2 bg-blue-400 w-96 h-5  rounded-2xl m-auto">
              <div className="'progress-bar"
                role='progressbar'
                aria-value={uploadBg}
                aria-aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: `${uploadBg}%` }}>
                {`${uploadBg}%`}
              </div>
              <h1 className="">{msgBg}</h1>
            </div>}
        </div>
        <div className="mt-8">
          <lable className="font-bold text-2xl p-8 m-4">Font Upload</lable>
          <input
            type='file'
            className="form-control ml-40"
            onChange={(e) => setFontFlyerFile(e.target.files[0])}
            placeholder='fileupload' />
          <Button className="mr-16" onClick={fontFileUpload} >upload</Button>
          {upload &&
            <div className="progress mt-2 bg-blue-400 w-96 h-5  rounded-2xl m-auto">
              <div className="'progress-bar"
                role='progressbar'
                aria-value={uploadFont}
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: `${uploadFont}%` }}>
                {`${uploadFont}%`}
              </div>
              <h1 className="">{msgFont}</h1>
            </div>}
        </div>
        <div className="mt-8">
          <lable className="font-bold text-2xl p-8 m-4"> Subflyer Image uplaod</lable>
          <input
            type='file'
            className="form-control ml-30"
            onChange={(e) => setSubFlyerFile(e.target.files[0])}
            placeholder='fileupload'
            style={{ marginLeft: '40px' }} />

          <Button className="mr-16" onClick={subFlyerFileUpload} >upload </Button>
          {upload &&
            <div className="progress mt-2 bg-blue-400 w-96 h-5  rounded-2xl m-auto">
              <div className="'progress-bar"
                role='progressbar'
                aria-value={uploadSubFlyer}
                aria-valuemin='0'
                aria-valuemax='100'
                style={{ width: `${uploadSubFlyer}%` }}>
                {`${uploadSubFlyer}%`}
              </div>
              <h1 className="">{msgSubFlyer}</h1>
            </div>}
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



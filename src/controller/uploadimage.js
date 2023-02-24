const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "ddhyuse8r",
    api_key: "455414113895392",
    api_secret: "7kNNkfb8SJz-Pr4Jwl8xSbEYVX0"
  });

  const upload = async (file)=> {
    return new Promise(function (resolve, reject) {
    file = req?.files
    console.log("kom")
    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
        console.log(result)
        return resolve(result.url)
    
      })
  
  }
    )}


// let uploadFile = async (file) => {
//     return new Promise(function (resolve, reject) {

//         let s3 = new aws.S3({ apiVersion: "2006-03-01" })

//         var uploadParams = {
//             ACL: "public-read",
//             Bucket: "classroom-training-bucket",
//             Key: "group10/" + file.originalname,
//             Body: file.buffer
//         }
//         console.log(uploadFile)
//         s3.upload(uploadParams, function (err, data) {
//             if (err) {
//                 return reject({ "error": err })
//             }

//             return resolve(data.Location)
//         }
//         )

//     }
//     )
// }

module.exports = { upload}


const cloudinary = require("cloudinary").v2;
require("dotenv").config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})


async function handleUpload(file,type) {
  const res = await cloudinary.uploader.upload(file, {
    folder: `photos_${type}`,
    resource_type: "auto",
  });
  return res;
}

const uploadtoCloud = async(req,res,next)=>{
  console.log("Uploading to cloud");
    // console.log(req.body);

    if(req.body.username!=process.env.USERNAME || req.body.password!=process.env.PASSWORD){
        return res.status(403).send({
            message:"Invalid User"
        })
    }

    // console.log(req.file);
    const type = req.body.type;
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI,type);
      
      console.log(cldRes);

      req.CldRes = cldRes;
      next();
      
    } catch (error) {
      console.log(error);
      res.send({
        message: error.message,
      });
    }
}






module.exports = {uploadtoCloud
  
}
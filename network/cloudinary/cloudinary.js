const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'none909099', 
  api_key: '717354965411238', 
  api_secret: '30GP6EOB_3pl-fWZs_eZz_vWC2c' ,
  upload_preset:"nzf72w8r"
});

module.exports=cloudinary;
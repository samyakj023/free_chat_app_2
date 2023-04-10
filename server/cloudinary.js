const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'dafzlffu8', 
  api_key: '575132795853258', 
  api_secret: 'z2JzbntLE5kbJePr8Rk5Bn_s-2Q' ,
  secure: true
});
module.exports = cloudinary;

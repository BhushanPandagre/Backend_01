import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiErrors.js"

const registerUser = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   message:"ok"
  // })
  // get user details for frontend ..!!
  // validation- not empty
  // check if user already exists:username , email
  //check for images and check for avatar
  // upload them to cloudinary,avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  //ckeck for user creation
  // return response

  const { fullname, email, username, password } = req.body;
  console.log("email", email);

  if(fullname === ""){
  throw new ApiError
  }

});

export { registerUser };

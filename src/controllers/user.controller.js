import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req, res) => {
    
    // get user details from frontend

    const {username, fullname, password, email} = req.body
    console.log("email : ", email)

    // validation - not empty
    // check if already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create db entry
    // remove pwd and refresh token field from res
    // check for user creation
    // return res

})

export {registerUser}
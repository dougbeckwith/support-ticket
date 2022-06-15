// Simple middleware for handling exceptions inside
// of async express routes and passing them to your
// express error handlers.
const asyncHandler = require('express-async-handler')

// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body

  // Validtion
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all errors')
  }
  res.send('Register Route')
})

// @desc Login a new user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route')
})

module.exports = {loginUser, registerUser}

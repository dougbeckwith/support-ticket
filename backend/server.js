const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000

// Connect to database
connectDB()

const app = express()

// Allows us to send json
app.use(express.json())
// Allows us to send urlencoded
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to the support desk api'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

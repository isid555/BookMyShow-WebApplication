const express = require('express')
const dbConfig = require('./dbConfig/dbConfig.js')
let cors = require('cors')



const userRoutes = require('./routes/userRoutes')
const theatreRoutes = require('./routes/theatreRoute')
const showRoutes = require('./routes/showRoutes')
const movieRoutes = require('./routes/movieRoutes')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/users', userRoutes)
app.use('/api/theatres',theatreRoutes)
app.use('/api/shows',showRoutes)
app.use('/api/movies',movieRoutes)

const PORT = 8080
app.listen(PORT,()=>{
    console.log("Server running at " + PORT)
})

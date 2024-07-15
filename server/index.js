const express = require('express')
const dbConfig = require('./dbConfig/dbConfig.js')
let cors = require('cors')



const userRoutes = require('./routes/userRoutes')


require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/users', userRoutes)


const PORT = 8080
app.listen(PORT,()=>{
    console.log("Server running at " + PORT)
})

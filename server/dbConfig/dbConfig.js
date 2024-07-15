const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://r555sid:baahubali@cluster0.4scnnfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const connection = mongoose.connection

connection.on('connected' , ()=>{
console.log("Connection Successful")
})
connection.on('error' , ()=>{
    console.log("Connection unsuccessful")
})
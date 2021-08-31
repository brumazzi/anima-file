const express = require('./config/express')
const {mongoose} = require('./config/db')

const PORT = 3000
express.listen(PORT)
console.log(`Start server on localhost:${PORT}`)

mongoose.connect('mongodb://localhost:27017/animaFile')
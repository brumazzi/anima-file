const express = require('./config/express')
const {mongoose} = require('./config/db')

require('./config/ws')

const PORT = 3000
express.listen(PORT, '0.0.0.0')
console.log(`Start server on localhost:${PORT}`)

mongoose.connect('mongodb://127.0.0.1:27017/animaFile')
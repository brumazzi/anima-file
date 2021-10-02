const express = require('express')
const i18n = require('./i18n')
const { createEngine } = require('express-react-views')
const session = require('express-session')
const bodyParser = require('body-parser')
const routes = require('./routes')
const server = express()

server.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60*60*60*100 }
}))

server.use(i18n.init)
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(express.static(`${__dirname}/../public/`))
server.set('view engine', 'jsx')
server.set('views', `${__dirname}/../app/views/`)
server.engine('jsx', createEngine())

server.use(routes.noAuthRoutes)
server.use(routes.userRoutes)
server.use(routes.freeRoutes)

module.exports = server
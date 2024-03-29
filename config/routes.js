const Express = require('express')
const Midware = require('../libs/auth')
const Controllers = require('../libs/controller')

let noAuthRoutes = new Express.Router()
let userRoutes = new Express.Router()
let freeRoutes = new Express.Router()

noAuthRoutes.use('/login/', Midware.onlyJSON, Midware.isUserNoAuthenticated)
noAuthRoutes.use('/register/', Midware.onlyJSON, Midware.isUserNoAuthenticated)

noAuthRoutes.get('/', (req, res)=>{res.render('templates/base', {t: res.__('translate')})})
noAuthRoutes.get('/home', Controllers.Home.index)

noAuthRoutes.get('/login', Controllers.Home.login)
noAuthRoutes.get('/register', Controllers.Home.register)
noAuthRoutes.post('/login', Midware.userAuthenticate)
noAuthRoutes.post('/register', Midware.userRegistrate)

noAuthRoutes.get('/c/:type', Controllers.Content.NoAuth.index)
noAuthRoutes.post('/c/:type', Controllers.Content.NoAuth.index)
noAuthRoutes.get('/c/:slug', Controllers.Content.NoAuth.view)
// noAuthRoutes.get(/\/c\/.+/, (req, res)=>{res.send(`<render dest="#none"><script type="text/javascript" command="alert({title: 'Página em construção', icon: 'error'})" /></render>`)})

userRoutes.use(/\/u?.+/, Midware.onlyJSON, Midware.isUserAuthenticated)
userRoutes.get('/u/', Controllers.User.index)

userRoutes.get('/u/banners', Controllers.Banner.index)
userRoutes.get('/u/banner/new', Controllers.Banner.new)
userRoutes.post('/u/banner/', Controllers.Banner.create)
userRoutes.get('/u/banner/:_id', Controllers.Banner.show)
userRoutes.get('/u/banner/:_id/edit', Controllers.Banner.edit)
userRoutes.put('/u/banner/:_id', Controllers.Banner.update)

userRoutes.get('/u/categories', Controllers.Category.index)
userRoutes.get('/u/category/new', Controllers.Category.new)
userRoutes.post('/u/category/', Controllers.Category.create)
userRoutes.get('/u/category/:_id', Controllers.Category.show)
userRoutes.get('/u/category/:_id/edit', Controllers.Category.edit)
userRoutes.put('/u/category/:_id', Controllers.Category.update)

userRoutes.get('/u/contents', Controllers.Content.index)
userRoutes.get('/u/content/new', Controllers.Content.new)
userRoutes.post('/u/content/', Controllers.Content.create)
userRoutes.get('/u/content/:_id', Controllers.Content.show)
userRoutes.get('/u/content/:_id/edit', Controllers.Content.edit)
userRoutes.put('/u/content/:_id', Controllers.Content.update)

userRoutes.get('/u/dashboard', Controllers.User.dashboard)

userRoutes.get(/\/u\/.+/, (req, res)=>{res.send(`<render dest="#none"><script type="text/javascript" command="alert({title: 'Página em construção', icon: 'error'})" /></render>`)})
userRoutes.post('/u/logout', Midware.userLogout)

module.exports = {
    noAuthRoutes: noAuthRoutes,
    userRoutes: userRoutes,
    freeRoutes: freeRoutes
}
const User = require('../app/models/user')
const GenPassword = require('./password')
const bcrypt = require('bcrypt')

function sendError(error=""){return `<render dest="#none"><script type="text/javascript" command="alert({title: '${error}', icon: 'error'})" /></render>`}
function sendMessage(message=null){return `<render dest="#none"><script type="text/javascript" command='${message ? `alert(${JSON.stringify(message)});` : ""}' /></render>`}
function sendRedirect(templateUrl="", message=null){return `<render dest="#none"><script type="text/javascript" command='requestPage("GET", "${templateUrl}");${message ? `alert(${JSON.stringify(message)});` : ""}' /></render>`}

module.exports = {
    isUserAuthenticated: async (req, res, next) => {
        if(req.session.user) next()
        else res.send(sendRedirect('/login'))
    },
    isUserNoAuthenticated: async (req, res, next) => {
        if(!req.session.user) next()
        else res.send(sendRedirect('/u/'))
    },
    userAuthenticate: async (req, res, next) => {
        let password = req.body.password
        let user = await User.findOne({login: req.body.login}).exec()
        if(user && bcrypt.compareSync(password, user.password)){
            req.session.user = user
            res.send(sendRedirect('/home/'))
        }else res.send(sendError('Usuário ou senha inválidos')) // TODO change error message
    },
    userRegistrate: async (req, res, next) => {
        let user = new User(req.body.user)
        let gemPass = await GenPassword.setUserPassword(user, req.body.user.passwordConfirmation)
        if(gemPass.success){
            user.save((error)=>{
                if(error)
                    res.send(sendError('Lorem Ipsum')) // TODO change error message
                else
                    res.send(sendRedirect('/login'))
            })
        }else{
            res.send(sendError(gemPass.error))
        }
    },
    userLogout: async (req, res, next) => {
        req.session.user = null
        res.send(sendRedirect('/home'))
    },
    onlyJSON: async (req, res, next) =>{
        if(req.get('content-type') == 'application/json') next()
        else res.redirect('/')
    },
    sendRedirect: sendRedirect,
    sendError: sendError
}
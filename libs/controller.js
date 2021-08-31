const {} = require('../config/db')

module.exports = {
    Home: {
        index: async (req, res) => { res.render('home/index', { t: res.__('translate') }) },
        login: async (req, res) => { res.render('home/login', { t: res.__('translate') }) },
        register: async (req, res) => { res.render('home/register', { t: res.__('translate') }) },
    },
    // TODO: Add user filters

    Category: require('./controllers/category'),
    Content: require('./controllers/content'),
    User: require('./controllers/user'),
}
const {} = require('../config/db')

module.exports = {
    Home: {
        index: async (req, res) => { res.render('home/index', { t: res.__('translate'), session: req.session }) },
        login: async (req, res) => { res.render('home/login', { t: res.__('translate'), session: req.session }) },
        register: async (req, res) => { res.render('home/register', { t: res.__('translate'), session: req.session }) },
    },
    // TODO: Add user filters

    Banner: require('./controllers/banner'),
    Category: require('./controllers/category'),
    Content: require('./controllers/content'),
    User: require('./controllers/user'),
}
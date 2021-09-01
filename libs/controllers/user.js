module.exports = {
    index: async (req, res) => {
        res.render('user/index', { t: res.__('translate'), session: req.session })
    },
    dashboard: async (req, res) =>{
        res.render('user/dashboard', { t: res.__('translate'), session: req.session })
    },
    account: async (req, res) =>{
        res.render('', {t: res.__('translate'), session: req.session})
    }
}
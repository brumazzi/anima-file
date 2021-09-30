const {BannerModel} = require('../../config/db')
const {sendRedirect, sendError} = require('../auth')

module.exports = {
    index: async (req, res) => {
        BannerModel.find({}, (err, banners)=>{
            res.render('banners/index', { t: res.__('translate'), session: req.session, banners: banners })
        })
    },
    new: async (req, res) => {
        res.render('banners/new', { t: res.__('translate'), session: req.session })
    },
    create: async (req, res) => {
        let banner = new BannerModel(req.body.banner)

        banner.save({ _id: req.params._id }, (err, banner)=>{
            if(err) res.render('banners/new', { t: res.__('translate'), session: req.session, banner: banner, message: "Lorem"})
            else res.render('banners/show', { t: res.__('translate'), session: req.session, banner: banner, message: "Lorem"})
        })
    },
    update: async (req, res) => {
        req.body.banner.updateDate = new Date()
        BannerModel.findOneAndUpdate({ _id: req.params._id }, req.body.banner, (err, banner)=>{
            req.body.banner.updateDate = new Date()
            if(err) res.render('banners/edit', { t: res.__('translate'), session: req.session, banner: banner, message: "Lorem"})
            else res.send(sendRedirect(`/u/banner/${banner._id}`, JSON.stringify({title: "Lorem", icon: "success"})))
        })
    },
    edit: async (req, res) => {
        BannerModel.findOne({ _id: req.params._id }, (err, banner)=>{
            res.render('banners/edit', { t: res.__('translate'), session: req.session, banner: banner })
        })
    },
    show: async (req, res) => {
        BannerModel.findOne({ _id: req.params._id }, (err, banner)=>{
            res.render('banners/show', { t: res.__('translate'), session: req.session, banner: banner })
        })
    }
}
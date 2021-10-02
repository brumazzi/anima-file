const {CategoryModel} = require('../../config/db')
const {sendRedirect, sendError} = require('../auth')

module.exports = {
    index: async (req, res) => {
        CategoryModel.find({}, (err, categories)=>{
            res.render('categories/index', { t: res.__('translate'), session: req.session, categories: categories })
        })
    },
    new: async (req, res) => {
        res.render('categories/new', { t: res.__('translate'), session: req.session })
    },
    create: async (req, res) => {
        let category = new CategoryModel(req.body.category)

        category.save({ _id: req.params._id }, (err, category)=>{
            if(err) res.render('categories/new', { t: res.__('translate'), session: req.session, category: category, message: "Lorem"})
            else res.render('categories/show', { t: res.__('translate'), session: req.session, category: category, message: "Lorem"})
        })
    },
    update: async (req, res) => {
        req.body.category.updateDate = new Date()
        CategoryModel.findOneAndUpdate({ _id: req.params._id }, req.body.category, (err, category)=>{
            req.body.category.updateDate = new Date()
            if(err) res.render('categories/edit', { t: res.__('translate'), session: req.session, category: category, message: "Lorem"})
            else res.send(sendRedirect(`/u/category/${category._id}`, {title: "Lorem", icon: "success"}))
        })
    },
    edit: async (req, res) => {
        CategoryModel.findOne({ _id: req.params._id }, (err, category)=>{
            res.render('categories/edit', { t: res.__('translate'), session: req.session, category: category })
        })
    },
    show: async (req, res) => {
        CategoryModel.findOne({ _id: req.params._id }, (err, category)=>{
            res.render('categories/show', { t: res.__('translate'), session: req.session, category: category })
        })
    }
}
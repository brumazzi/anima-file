const { ContentModel, CategoryModel} = require('../../config/db')
const {sendRedirect,sendError} = require('../auth')

module.exports = {
    index: async (req, res) => {
        ContentModel.find({}, (err, contents)=>{
            res.render('contents/index', { t: res.__('translate'), session: req.session, contents: contents })
        })
    },
    show: async (req, res) => {
        ContentModel.findOne({ _id: req.params._id }, (err, content)=>{
            res.render('contents/show', { t: res.__('translate'), session: req.session, content: content })
        })
    },
    new: async (req, res) => {
        let categories = await CategoryModel.find({})

        // TODO: add filters to find categories, stamps and layouts
        res.render('contents/new', {
            t: res.__('translate'),
            session: req.session,
            categories: categories,
        })
    },
    edit: async (req, res) => {
        ContentModel.findOne({ _id: req.params._id }, async (err, content)=>{
            let categories = await CategoryModel.find({})

            res.render('contents/edit', {
                t: res.__('translate'),
                session: req.session,
                content: content,
                categories: categories,
            })
        })
    },
    create: async (req, res) => {
        req.body.content.categories.splice(0,1)
        let content = new ContentModel(req.body.content)

        content.save((err, content)=>{
            if(err) res.render('contents/new', { t: res.__('translate'), session: req.session, content: content, message: "Lorem"})
            else res.render('contents/show', { t: res.__('translate'), session: req.session, content: content, message: "Lorem"})
        })
    },
    update: async (req, res) => {
        req.body.content.updateDate = new Date()
        req.body.content.categories.splice(0,1)

        ContentModel.findOneAndUpdate({ _id: req.params._id }, req.body.content, (err, content)=>{
            req.body.content.updateDate = new Date()
            if(err) res.render('contents/edit', { t: res.__('translate'), session: req.session, content: content, message: "Lorem"})
            else res.send(sendRedirect(`/u/content/${content._id}`, JSON.stringify({title: "Lorem", icon: "success"})))
        })
    },
    show: async (req, res) => {
        ContentModel.findOne({ _id: req.params._id }, async (err, content)=>{
            let categories = []
            if(content.categories.length > 0)
                categories = await CategoryModel.find({_id: content.categories})
            res.render('contents/show', { t: res.__('translate'), session: req.session, content: content, categories: categories })
        })
    },
    view: async (req, res) => {
        let contentSlug = req.originalUrl.slice(3).toLowerCase()
        ContentModel.findOne({ _id: contentSlug }, (err, content)=>{
            res.render(`contents/layouts/${content ? content.layout : 'simple'}`, { t: res.__('translate'), content: content })
        })
    }
}
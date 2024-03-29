const Content = require('../../app/models/content')
const { ContentModel, CategoryModel } = require('../../config/db')
const { sendRedirect, sendError } = require('../auth')

module.exports = {
    index: async (req, res) => {
        let filter = {}
        if (req.query.search) {
            filter = {
                name: new RegExp(req.query.name, 'i')
            }
        }
        ContentModel.find(filter, (err, contents) => {
            res.render('contents/index', { t: res.__('translate'), session: req.session, contents: contents })
        })
    },
    show: async (req, res) => {
        ContentModel.findOne({ _id: req.params._id }, (err, content) => {
            res.render('contents/show', { t: res.__('translate'), session: req.session, content: content })
        })
    },
    new: async (req, res) => {
        let categories = await CategoryModel.find({})

        res.render('contents/new', {
            t: res.__('translate'),
            session: req.session,
            categories: categories,
        })
    },
    edit: async (req, res) => {
        ContentModel.findOne({ _id: req.params._id }, async (err, content) => {
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
        req.body.content.categories.splice(0, 1)
        let content = new ContentModel(req.body.content)

        content.save((err, content) => {
            if (err) res.render('contents/new', { t: res.__('translate'), session: req.session, content: content, message: "Lorem" })
            else res.send(sendRedirect(`/u/content/${content._id}`, { title: "Lorem", icon: "success" }))
        })
    },
    update: async (req, res) => {
        req.body.content.updateDate = new Date()
        req.body.content.categories.splice(0, 1)

        ContentModel.updateOne({ _id: req.params._id }, req.body.content, (err, content) => {
            req.body.content.updateDate = new Date()
            if (err) res.render('contents/edit', { t: res.__('translate'), session: req.session, content: content, message: "Lorem" })
            else res.send(sendRedirect(`/u/content/${req.params._id}`, { title: "Lorem", icon: "success" }))
        })
    },
    show: async (req, res) => {
        ContentModel.findOne({ _id: req.params._id }, async (err, content) => {
            let categories = []
            if (content.categories.length > 0)
                categories = await CategoryModel.find({ _id: content.categories })
            res.render('contents/show', { t: res.__('translate'), session: req.session, content: content, categories: categories })
        })
    },
    NoAuth: {
        index: async (req, res) => {
            let findParams = {
                type: req.params.type,
                visible: true
            }
            if (req.body.content) {
                if (req.body.content.complete === 'true') findParams.complete = true
                else if (req.body.content.complete === 'false') findParams.complete = false
                if (req.body.content.name) findParams.name = new RegExp(req.body.content.name, 'i')
            }
            ContentModel.find(findParams, async (err, contents) => {
                let category_ids = []
                let categories = []
                for (let i = 0; i < contents.length; i += 1) {
                    for (let j = 0; j < contents[i].categories.length; j += 1) {
                        if (!category_ids.includes(contents[i].categories[j]))
                            category_ids.push(contents[i].categories[j])
                    }
                }
                if (category_ids.length > 0) categories = await CategoryModel.find({ _id: category_ids })
                res.render('contents/noAuth/index', { t: res.__('translate'), contents: contents, categories: categories, session: req.session, type: req.params.type, params: req.body.content })
            })
        },
        view: async (req, res) => {
            ContentModel.find({ type: req.params.type, visible: true }, async (err, contents) => {
                let category_ids = []
                let categories = []
                for (let i = 0; i < contents.length; i += 1) {
                    for (let j = 0; j < contents[i].categories.length; j += 1) {
                        if (!category_ids.includes(contents[i].categories[j]))
                            category_ids.push(contents[i].categories[j])
                    }
                }
                if (category_ids.length > 0) categories = await CategoryModel.find({ _id: category_ids })
                res.render('contents/noAuth/view', { t: res.__('translate'), contents: contents, categories: categories, session: req.session })
            })
        }
    },
}
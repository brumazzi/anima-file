const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

const CATEGORY_SCHEMA = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String},
    createDate: {type: Date, default: new Date()},
    updateDate: {type: Date, default: new Date()}
})

const CONTENT_SCHEMA = new Schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    publishDate: {type: Date},
    visible: {type: Boolean, default: false},
    complete: {type: Boolean, default: false},
    type: {type: String, required: true},
    chapters: {type: Number},
    description: {type: String},
    categories: {type: Array},
    createDate: {type: Date, default: new Date()},
    updateDate: {type: Date, default: new Date()}
})

const USER_SCHEMA = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    info: {
        name: {type: String, required: true},
        birth: {type: Date},
    },
    createDate: {type: Date, default: new Date()},
    loginHistory: [{
        date: {type: Date, required: true},
        userAgent: {type: String},
        ip: {type: String}
    }]
})

module.exports = {
    CategoryModel:       mongoose.model("category", CATEGORY_SCHEMA),
    ContentModel:        mongoose.model("content", CONTENT_SCHEMA),
    UserModel:           mongoose.model("user", USER_SCHEMA),
    mongoose:            mongoose
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

const BANNER_SCHEMA = new Schema({
    title: {type: String, required: true},
    active: {type: Boolean, required: true, default: false},
    image: {type: String, required: false},
    description: {type: String, required: false},
    createDate: {type: Date, default: new Date()},
    updateDate: {type: Date, default: new Date()}
})

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
    image: {type: String, required: false},
    type: {type: String, required: true},
    chapters: {type: Number},
    description: {type: String},
    categories: [{type: ObjectId, ref: 'category'}],
    createDate: {type: Date, default: new Date()},
    updateDate: {type: Date, default: new Date()}
})

// const TYPE_SCHEMA = new Schema({
//     name: {type: String, required: true},
//     translates: [
//         {
//             lang: {type: String, required: true, unique: true},
//             name: {type: String, required: true, unique: false}
//         }
//     ]
// })

const USER_SCHEMA = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    is_admin: {type: Boolean, required: true, default: false},
    info: {
        name: {type: String, required: true},
        birth: {type: Date},
    },
    contents: {
        group: {type: String, enum: ['']}
    },
    createDate: {type: Date, default: new Date()},
    loginHistory: [{
        date: {type: Date, required: true},
        userAgent: {type: String},
        ip: {type: String}
    }]
})

module.exports = {
    BannerModel:        mongoose.model("banner", BANNER_SCHEMA),
    CategoryModel:      mongoose.model("category", CATEGORY_SCHEMA),
    ContentModel:       mongoose.model("content", CONTENT_SCHEMA),
    UserModel:          mongoose.model("user", USER_SCHEMA),
    mongoose:           mongoose
}
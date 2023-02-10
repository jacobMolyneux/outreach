const req = require('express/lib/request')
const {User} = require('../models/user')

exports.get_user = (req, res, next) => {
    res.json('Get User endpoint')
}

exports.create_user = (req, res, next) => {
    res.json('create user endpoint')
}

exports.edit_info = (req, res, next) => {
    res.json('edit user info')
}

exports.sign_in = (req, res, next) => {
    res.json('sign in endpoint')
}
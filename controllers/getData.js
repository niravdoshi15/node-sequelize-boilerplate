const db = require('../models');
const User = db.users

module.exports = async() => {
    const users = await User.findAll()
    return users
}
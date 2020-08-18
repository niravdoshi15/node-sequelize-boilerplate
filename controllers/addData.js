const db = require('../models');
const User = db.users

module.exports = () => {
    User.bulkCreate([
        { person: 'Bob', group_id: 1, age: 32 },
        { person: 'Jill', group_id: 1, age: 34 },
        { person: 'Shawn', group_id: 1, age: 42 },
        { person: 'Jake', group_id: 2, age: 29 },
        { person: 'Paul', group_id: 2, age: 36 },
        { person: 'Laura', group_id: 2, age: 39 }
    ]).then(function () {
        return User.findAll();
    }).then(function (users) {
        // console.log(users)
    }).catch(function (err){
        console.log(err)
    })
}
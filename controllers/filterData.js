const db = require('../models');
const User = db.users

const groups = [1, 2]

module.exports = async () => {
    const filterUser = []
    for (let i=0; i<groups.length; i++) {
        let user = await User.findAll({
            where: {
                group_id: groups[i]
            },
            order: [
                ['age', 'DESC']
            ],
            limit: 2
        })
        filterUser.push(...user)
    }
    return filterUser
}
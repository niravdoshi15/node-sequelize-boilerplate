module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        person: {
            type: Sequelize.STRING,
            primaryKey: !0
        },
        group_id: {
            type: Sequelize.INTEGER
        },
        age: {
            type: Sequelize.INTEGER
        }
    });

    return User;
};
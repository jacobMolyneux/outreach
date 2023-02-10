const {Sequelize, Model, DataTypes} = require('sequelize')

// this is placeholder need to change this to postgres sql but works for now

const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.Define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
})


export {User}
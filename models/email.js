const {Sequelize, Model, DataTypes} = require('sequelize')

const sequilize = new Sequelize('sqlite::memory')

const Email = sequilize.Define('Email', {
    author: DataTypes.STRING,
    email_title: DataTypes.STRING,
    recipients: [{
        type: DataTypes.STRING
    }],
    // data type for email text is text and not string because 'TEXT' char limit is 30,000 char vs 'STRING' char limit is 255 
    email_text: DataTypes.TEXT,
    opens: DataTypes.INTEGER,

})

export {Email}
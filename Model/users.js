const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const Users = sequelize.define("users", {
    user_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    home_id:{
      type:DataTypes.INTEGER,
    },
    username:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
});

Users.sync({alter:true})
// `sequelize.define` also returns the model
// console.log(Users === sequelize.models.Users); // true

module.exports = Users;

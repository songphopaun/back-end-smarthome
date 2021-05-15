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


module.exports = Users;

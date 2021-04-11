const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const Room = sequelize.define("room", {
    room_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    home_id:DataTypes.INTEGER,
    room_icon:DataTypes.STRING,
    room_name:DataTypes.STRING,
});

Users.sync({alter:true})
module.exports = Room;

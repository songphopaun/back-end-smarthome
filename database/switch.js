const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const Switch = sequelize.define("switch", {
    switch_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    room_id:DataTypes.INTEGER,
    sensor_id:DataTypes.INTEGER,
    status:DataTypes.STRING,
    value:DataTypes.INTEGER,
    type:DataTypes.STRING,
});

Users.sync({alter:true})
module.exports = Switch;

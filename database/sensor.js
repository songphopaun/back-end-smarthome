const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const Sensor = sequelize.define("sensor", {
    sensor_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    room_id:DataTypes.INTEGER,
    sensor_name:DataTypes.STRING,
});

Users.sync({alter:true})
module.exports = Sensor;

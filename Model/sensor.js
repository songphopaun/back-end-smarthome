const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");

const Sensor = sequelize.define("sensor", {
    sensor_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    home_id:DataTypes.INTEGER,
    room_id:DataTypes.INTEGER,
    sensor_name:DataTypes.STRING,
    sensor_icon:DataTypes.STRING,
    sensor_unit:DataTypes.STRING,
    sensor_type:DataTypes.STRING,
    key:DataTypes.STRING

});
Sensor.sync({alter:true})
module.exports = Sensor;

const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const SensorData = sequelize.define("sensor_data", {
    sensor_data_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    sensor_id:DataTypes.INTEGER,
    room_id:DataTypes.INTEGER,
    sensor_name_:DataTypes.STRING,
    value:DataTypes.FLOAT,
});

Users.sync({alter:true})
module.exports = SensorData;

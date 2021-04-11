const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const Device = sequelize.define("device", {
    device_id:{
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

Device.sync({alter:true})
module.exports = Device;

const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const Device = sequelize.define("device", {
    device_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    home_id:DataTypes.INTEGER,
    room_id:DataTypes.INTEGER,
    // sensor_id:DataTypes.INTEGER,
    device_name:DataTypes.STRING,
    status:DataTypes.STRING,
    value:DataTypes.INTEGER,
    type:DataTypes.STRING,
    device_icon:DataTypes.STRING,
    key:DataTypes.STRING
});

Device.sync({alter:true})
module.exports = Device;

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
    sensor_icon:DataTypes.STRING,

});
// Sensor.associate = function(models) {
//     Sensor.hasOne(models.sensor_data, {foreignKey: 'sensor_id'});
// }

Sensor.sync({alter:true})
module.exports = Sensor;

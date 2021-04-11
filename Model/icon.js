const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const Icon = sequelize.define("icon", {
    icon_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    path_icon:DataTypes.STRING,
});

Icon.sync({alter:true})
module.exports = Icon;

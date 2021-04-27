const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const Covid = sequelize.define("covid_updates", {
    last_update:DataTypes.CHAR,
    confirm_case:DataTypes.CHAR,
    recovery:DataTypes.CHAR,
    dead:DataTypes.CHAR,
    new:DataTypes.CHAR,
});

Covid.sync({alter:true})
module.exports = Covid;

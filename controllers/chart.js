const jwt = require("jsonwebtoken");
const Sensor_data = require("../Model/sensor_data");
const Sensor = require("../Model/sensor");
const Room = require("../Model/room");
var moment = require("moment");

const chartNameSensor = (req, res) => {
  let home_id = req.query.home_id;
  Sensor.findAll({
    where: { home_id: home_id },
    order: [["sensor_id", "ASC"]],
  }).then((result) => {
    if (result) {
      res.json({ data: result });
    } else {
      res.json({ status: false });
    }
  });
};

const chartDataSensor =  (req, res) => {
  var date = moment().format('DD')
  let sensor_id = req.query.sensor_id;
  let day = req.query.day
  Sensor.hasOne(Sensor_data, { foreignKey: "sensor_id" });
  Sensor_data.belongsTo(Sensor, { foreignKey: "sensor_id" });
  Sensor_data.findAll({
    where: { sensor_id: sensor_id },
    order: [["sensor_data_id", "ASC"]],
    include: [
      {
        model: Sensor,
        attributes: ["sensor_name"],
      },
    ],
  }).then((result) => {
    const newData = []
    for (let i = 0; i < result.length; i++) {
      const newDate = moment(result[i].dataValues.updatedAt).add(-7, 'hours').format('DD')
      if(newDate >= date-day){
        newData.push(result[i])
      }      
    }
    res.json({ data: newData });
  });
};


const chartDataOneSensor = (req, res) => {
  let sensor_id = req.query.sensor_id;
  Sensor.hasOne(Sensor_data, { foreignKey: "sensor_id" });
  Sensor_data.belongsTo(Sensor, { foreignKey: "sensor_id" });
  Sensor_data.findOne({
    where: { sensor_id: sensor_id },
    order: [["sensor_data_id", "DESC"]],
    include: [
      {
        model: Sensor,
        attributes: ["sensor_name"],
      },
    ],
  }).then((result) => {
    res.json({ data: result });
  });
};

const chartDataSensor2 = (req, res) => {
  var date = moment().format('DD')
  let sensor_id = req.query.sensor_id;
  let day = req.query.day
  Sensor.hasOne(Sensor_data, { foreignKey: "sensor_id" });
  Sensor_data.belongsTo(Sensor, { foreignKey: "sensor_id" });
  Sensor_data.findAll({
    where: { sensor_id: sensor_id },
    order: [["sensor_data_id", "ASC"]],
    include: [
      {
        model: Sensor,
        attributes: ["sensor_name"],
      },
    ],
  }).then((result) => {
    const newData = []
    for (let i = 0; i < result.length; i++) {
      const newDate = moment(result[i].dataValues.updatedAt).add(-7, 'hours').format('DD')
      if(newDate >= date-day){
        newData.push(result[i])
      }      
    }
    res.json({ data: newData });  });
};
   
const chartDataOneSensor2 = (req, res) => {
  let sensor_id = req.query.sensor_id;
  Sensor.hasOne(Sensor_data, { foreignKey: "sensor_id" });
  Sensor_data.belongsTo(Sensor, { foreignKey: "sensor_id" });
  Sensor_data.findOne({
    where: { sensor_id: sensor_id },
    order: [["sensor_data_id", "DESC"]],
    include: [
      {
        model: Sensor,
        attributes: ["sensor_name"],
      },
    ],
  }).then((result) => {
    res.json({ data: result });
  });
};

const chartPower = (req,res)=>{
  let home_id = req.query.home_id
  Sensor.findOne({
    where:{home_id:home_id,sensor_type:'energy'}
  }).then((result)=>{
    if(result){
      let sensor_id = result.dataValues.sensor_id
      Sensor.hasOne(Sensor_data, { foreignKey: "sensor_id" });
      Sensor_data.belongsTo(Sensor, { foreignKey: "sensor_id" });
      Sensor_data.findOne({
        where: { sensor_id: sensor_id },
        order: [["sensor_data_id", "DESC"]],
        include: [
          {
            model: Sensor,
            attributes: ["sensor_name"],
          },
        ],
      }).then((result) => {
        res.json({ data: result });
      });
    }
  })
}

module.exports = { chartNameSensor, chartDataSensor, chartDataOneSensor, chartDataSensor2, chartDataOneSensor2,chartPower };
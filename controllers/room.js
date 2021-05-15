const Room = require("../Model/room");
const Sensor_data = require("../Model/sensor_data");
const Sensor = require("../Model/sensor");
const Device = require("../Model/switch");
var Sequelize = require("sequelize");

const listRoom = (req, res) => {
  let home_id = req.query.home_id;
  Room.findAll({
    where: { home_id: home_id },
    order: [["room_id", "ASC"]],
  }).then((result) => {
    if (result) {
      res.json({ data: result });
    } else {
      res.json({ status: false });
    }
  });
};

const dataRoom = (req, res) => {
  Sensor.hasOne(Sensor_data, { foreignKey: "sensor_id" });
  Sensor_data.belongsTo(Sensor, { foreignKey: "sensor_id" });
  let room_id = req.query.room_id;
  let sensor_length = null;
  var id_sensor = [];
  var newData = []

  Sensor.findAll({
    where: { room_id: room_id },
  }).then((result) => {
    sensor_length = result.length;
    for (let i = 0; i < result.length; i++){
      id_sensor.push(result[i].dataValues.sensor_id);
    }
  }).then(()=>{
    Sensor_data.findAll({
      where: { room_id: room_id },
      order: [["sensor_id", "DESC"]],
      include: [
        {
          model: Sensor,
          attributes: ["sensor_name", "sensor_icon","sensor_unit"],
        },
      ],
    })
      .then( (result) => {
        if (result) {
          for (let i = 0; i <= sensor_length; i++) {
            const findData = result.find((item) => item.sensor_id == id_sensor[i])
            if(findData){
            newData.push(findData);
            }
          }
          res.json({ data: newData });
        } else {
          res.json({ status: false });
        }
      })
  })
};

const deviceRoom = (req, res) => {
  let room_id = req.query.room_id;
  Device.findAll({
    where: { room_id: room_id },
    order: [["device_id", "DESC"]],
  }).then((result) => {
    if (result) {
      res.json({ data: result });
    } else {
      res.json({ status: false });
    }
  });
};

const switchRoom = (req, res) => {
  let { device_id, status } = req.body;
  let checkType = typeof status == "boolean" ? true : false;
  if (checkType) {
    Device.update({ status: status }, { where: { device_id: device_id } }).then(
      (result) => {
        if (result) {
          res.json({ status: true });
        } else {
          res.json({ status: false });
        }
      }
    );
  } else {
    Device.update({ value: status }, { where: { device_id: device_id } }).then(
      (result) => {
        if (result) {
          res.json({ status: true });
        } else {
          res.json({ status: false });
        }
      }
    );
  }
};
module.exports = { listRoom, dataRoom, deviceRoom, switchRoom };

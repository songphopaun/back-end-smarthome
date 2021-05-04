const jwt = require("jsonwebtoken");
const Sensor_data = require("../Model/sensor_data");
const Sensor = require("../Model/sensor");
const Room = require("../Model/room");

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

const chartDataSensor = (req, res) => {
  let sensor_id = req.query.sensor_id;
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
    res.json({ data: result });
  });
};


const chartDataOneSensor = (req, res) => {
  // console.log(req.query)
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
  let sensor_id = req.query.sensor_id;
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
    res.json({ data: result });
  });
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



module.exports = { chartNameSensor, chartDataSensor, chartDataOneSensor, chartDataSensor2, chartDataOneSensor2 };



// const chartDataSensor2 = (req, res) => {
//   console.log(req.query)
//   let sensor_id = req.query.sensor_id;
//   let home_id = req.user.key.home_id;
//   var fist_sensor_id = null;
//   var findRoomId = null;
//   // console.log("home_id", home_id);
//   // console.log("sensor_id", sensor_id);
//   Sensor.hasOne(Sensor_data, { foreignKey: "sensor_id" });
//   Sensor_data.belongsTo(Sensor, { foreignKey: "sensor_id" });
//   if (sensor_id == 0) {
//     Room.findOne({
//       where: { home_id: home_id },
//       order: [["room_id", "ASC"]],
//     }).then((result) => {
//       findRoomId = result.dataValues.room_id;
//       // console.log("findRoomId", findRoomId);
//       Sensor.findOne({
//         where: { room_id: findRoomId },
//         order: [["sensor_id", "ASC"]],
//       })
//         .then((result) => {
//           fist_sensor_id = result.dataValues.sensor_id;
//           // console.log('fist_sensor_id',fist_sensor_id);
//           Sensor_data.findAll({
//             where: { sensor_id: fist_sensor_id },
//             order: [["sensor_id", "DESC"]],
//             include: [
//               {
//                 model: Sensor,
//                 attributes: ["sensor_name"],
//               },
//             ],
//           }).then((result) => {
//             res.json({ data: result });
//           });
//         });
//     });
//   } else {
//     Sensor_data.findAll({
//       where: { sensor_id: sensor_id },
//       order: [["sensor_id", "DESC"]],
//       include: [
//         {
//           model: Sensor,
//           attributes: ["sensor_name"],
//         },
//       ],
//     }).then((result) => {
//       res.json({ data: result });
//     });
//   }
// };






// const chartDataOneSensor = (req, res) => {
//   console.log('req.query.sensor_id',req.query.sensor_id)
//   let sensor_id = req.query.sensor_id;
//   let home_id = req.user.key.home_id;
//   var fist_sensor_id = null;
//   var findRoomId = null;
//   // console.log("home_id", home_id);
//   // console.log("sensor_id", sensor_id);
//   Sensor.hasOne(Sensor_data, { foreignKey: "sensor_id" });
//   Sensor_data.belongsTo(Sensor, { foreignKey: "sensor_id" });
//   if (sensor_id == 0) {
//     Room.findOne({
//       where: { home_id: home_id },
//       order: [["room_id", "ASC"]],
//     }).then((result) => {
//       findRoomId = result.dataValues.room_id;
//       // console.log("findRoomId", findRoomId);
//       Sensor.findOne({
//         where: { room_id: findRoomId },
//         order: [["sensor_id", "ASC"]],
//       })
//         .then((result) => {
//           fist_sensor_id = result.dataValues.sensor_id;
//           // console.log('fist_sensor_id',fist_sensor_id);
//           Sensor_data.findOne({
//             where: { sensor_id: fist_sensor_id },
//             order: [["sensor_id", "DESC"]],
//             include: [
//               {
//                 model: Sensor,
//                 attributes: ["sensor_name"],
//               },
//             ],
//           }).then((result) => {
//             res.json({ data: result });
//           });
//         });
//     });
//   } else {
//     Sensor_data.findOne({
//       where: { sensor_id: sensor_id },
//       order: [["sensor_id", "DESC"]],
//       include: [
//         {
//           model: Sensor,
//           attributes: ["sensor_name"],
//         },
//       ],
//     }).then((result) => {
//       res.json({ data: result });
//     });
//   }
// };
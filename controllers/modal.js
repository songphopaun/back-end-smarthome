const bcrypt = require("bcrypt");
const saltRounds = 10;

const Room = require("../Model/room");
const Switch = require("../Model/switch");
const Sensor = require("../Model/sensor");
const Users = require("../Model/users");
const Icon = require("../Model/icon")

const addRoom = (req, res) => {
  const {name, path_icon, home_id} = req.body

  Room.create({
    home_id:home_id,
    room_icon:path_icon,
    room_name:name
  })
    .then(() => {
      res
        .status(200)
        .json({ message: "Room Added Successfully", status: true });
    })
    .catch(() => {
      res.status(400).json({ message: "Server is broken", status: false });
    });
};

const addDevice = (req, res) => {
  const {name , types, room, path_icon} = req.body
  Switch.create({
    room_id:room,
    device_name:name,
    status:false,
    value:0,
    type:types,
    device_icon:path_icon
  })
    .then(() => {
      res
        .status(200)
        .json({ message: "Device Added Successfully", status: true });
    })
    .catch(() => {
      res.status(400).json({ message: "Server is broken", status: false });
    });
};

const addSensor = (req, res) => {
  const {name, types, room, path_icon, home_id} = req.body

  const unit = types == 'temperature' ? 'C' : 'Humidity' ? '%' : 'Pm25' ? 'µg./m3' : 'Light' ? 'Lux' : ''
  Sensor.create({
    room_id:room,
    sensor_name:name,
    sensor_icon:path_icon,
    sensor_unit:unit,
    sensor_type:types,
    home_id:home_id
  })
    .then(() => {
      res
        .status(200)
        .json({ message: "Sensor Added Successfully", status: true });
    })
    .catch(() => {
      res.status(400).json({ message: "Server is broken", status: false });
    });
};

const addUser = (req, res) => {
  const { name, email, password, homeId } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    Users.findOne({ where: { email: email } }).then((result) => {
      if (result == null) {
        Users.findAndCountAll().then((result) => {
          Users.create({
            home_id: homeId,
            username: name,
            email: email,
            password: hash,
          })
            .then(() => {
              res
                .status(200)
                .json({ message: "User Added Successfully", status: true });
            })
            .catch(() => {
              res
                .status(400)
                .json({ message: "Server is broken", status: false });
            });
        });
      } else {
        res.json({
          message: "Sorry, That email is already in used.",
          status: false,
        });
      }
    });
  });
};

const icon = (req, res) => {
  Icon.findAll({})
    .then((result) => {
      res
        .status(200)
        .json({ icon:result});
    })
    .catch(() => {
      res.status(400).json({ message: "Server is broken", status: false });
    });
};

module.exports = { addRoom, addDevice, addSensor, addUser,icon };


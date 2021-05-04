const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');
// const sequelize = require('./config')
const PORT = process.env.PORT || 4000
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const Icon = require("./Model/icon")
const Room =require('./Model/room')
const Sensor =require('./Model/sensor')
const SensorData =require('./Model/sensor_data')
const Switch =require('./Model/switch')
const Users =require('./Model/users')
const Covid =require('./Model/covid')


app.get('/',(req,res)=>{
    res.send("<h1>Hello Server Smart Home</h1>");
})

const auth = require('./routes/auth')
app.use('/api',auth)

const room = require('./routes/room')
app.use('/api',room)

const covid = require('./routes/covid')
app.use('/api',covid)

const chart = require('./routes/chart')
app.use('/api',chart)

const modal = require('./routes/modal')
app.use('/api',modal)

const upload = require('./middleware/upload');
app.use('/uploads',express.static('uploads'))

const uploads = require('./routes/uploads')
app.use('/api',uploads)


// app.get("/add",async(req, res) => {
//     const setData ={
//         home_id:"1",
//         room_icon:"https://img.icons8.com/ios/452/bedroom.png",
//         room_name:"Bedroom2",
//     }
//     await Room.create(setData).then(obj=>{
//         console.log(obj)
//     }).catch(err=>{
//         console.log(err)
//     })
    
//   });

// app.get("/add/sensor",async(req, res) => {
//     const setData ={
//         room_id:"1",
//         sensor_name:"Temp",
//         sensor_icon:"https://img.icons8.com/ios/452/bedroom.png",

//     }
//     await Sensor.create(setData).then(obj=>{
//         console.log(obj)
//     }).catch(err=>{
//         console.log(err)
//     })
//   });

// app.get("/add/sensor_data",async(req, res) => {
//     const setData ={
//         sensor_id:"2",
//         room_id:"1",
//         value:"30"

//     }
//     await SensorData.create(setData).then(obj=>{
//         console.log(obj)
//     }).catch(err=>{
//         console.log(err)
//     })
//   });

// app.get("/add/device",async(req, res) => {
//     const setData ={
//         room_id:"1",
//         sensor_id:"2",
//         device_name:"Test2",
//         status:"false",
//         value:"10",
//         type:"TestType",
//         device_icon:"https://img.icons8.com/ios/452/bedroom.png"
//     }
//     await Switch.create(setData).then(obj=>{
//         console.log(obj)
//     }).catch(err=>{
//         console.log(err)
//     })
//   });
app.listen(PORT, () => { console.log(`Server is running on port : ${PORT}`)});

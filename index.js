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


const auth = require('./routes/auth')
app.use('/api',auth)

app.get("/add",async(req, res) => {
    const setData ={
        home_id:"1",
        room_icon:"https://img.icons8.com/ios/452/bedroom.png",
        room_name:"Bedroom",
    }
    await Room.create(setData).then(obj=>{
        console.log(obj)
    }).catch(err=>{
        console.log(err)
    })
    
  });


app.listen(PORT, () => { console.log(`Server is running on port : ${PORT}`)});

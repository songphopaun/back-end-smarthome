const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');
// const sequelize = require('./config')
const PORT = process.env.PORT || 4000
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



const auth = require('./routes/auth')
app.use('/api',auth)
  
app.listen(PORT, () => { console.log(`Server is running on port : ${PORT}`)});

const Users = require("../Model/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = (req, res, next) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    Users.findOne({ where: { email: email } }).then((result) => {
      if (result == null) {
        Users.findAndCountAll().then((result) => {
          Users.create({
            home_id: result.count + 1,
            username: username,
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

const login = (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ where: { email: email } }).then((result) => {
    if (result) {
      bcrypt.compare(
        password,
        result.dataValues.password,
        function (err, hash) {
          if (hash) {
            let key = {
              key:result.dataValues.user_id,
              home_id:result.dataValues.home_id
            }
            let token = jwt.sign({ key }, "secretValue", { expiresIn: "48h" });
            res.json({
              massage: "Login Successful!",
              status: true,
              token: token,
            });
          } else {
            res.json({ message: "Password does not matched.", status: false });
          }
        }
      );
    } else {
      res.json({ message: "No user found.", status: false });
    }
  });
};

const loginFaceId = (req,res) =>{
  const id = req.headers.id
  let key = {
      key:id,
  }
  Users.findOne({ where:{ user_id : id}}).then((result)=>{
    if(result){
      let token = jwt.sign({ key }, "secretValue", { expiresIn: "48h" });
      res.json({token:token})
    }
  })
}

const userInfo = (req, res) => {
  let user_id = req.user.key.key;
  Users.findOne({ where: { user_id: user_id } }).then((result) => {
    if (result) {
      res.json({
        status: true,
        data: {
          user_id:result.dataValues.user_id,
          home_id: result.dataValues.home_id,
          username: result.dataValues.username,
          email: result.dataValues.email,
        },
      });
    } else {
      res.json({ status: false });
    }
  });
};
module.exports = { register, login, userInfo, loginFaceId };

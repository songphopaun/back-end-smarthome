const Icon = require("../Model/icon")


const uploadIcon = (req, res) => {
    const path = `https://smarthome-bu.online/${req.file.path}`
    Icon.create({
        path_icon:path
    })
    .then(() => {
      res
        .status(200)
        .json({ message: "File uploaded!"});
    })
    .catch(() => {
      res.status(400).json({ message: "Server is broken"});
    });
};

module.exports = { uploadIcon };

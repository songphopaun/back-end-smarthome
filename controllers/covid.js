const Covid =require('../Model/covid')

const covid_update = (req, res) => {
    Covid.findOne({
      order: [["id", "DESC"]],
    }).then((result) => {
      if (result) {
        res.json({ data: result });
      } else {
        res.json({ message: "Server broken.", status: false });
    }
    });
  };

  module.exports = { covid_update};

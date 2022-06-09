const { History } = require("../modules/hitory.model");

const getHistory = async (req, res) => {
  try {
    History.findOne()
      .sort({ time_at: -1 })
      .then((result) => {
        if (result) {
          res.json({ result });
        }
      });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getHistory,
};
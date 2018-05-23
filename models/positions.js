var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Positions = sequelize.define("positions", {
    name: Sequelize.STRING,
    meaning: Sequelize.STRING
}, {
  timestamps: false
});

Positions.sync();

module.exports = Positions;
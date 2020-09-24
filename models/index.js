const fs = require("fs");
const Sequelize = require("sequelize");
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

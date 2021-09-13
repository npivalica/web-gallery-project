"use strict";

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = {
  port: 3001,
  database: {
    username: "root",
    password: "admin",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    database: "webgallery"
  }
};
let app = (0, _express.default)();
app.server = _http.default.createServer(app);
app.use((0, _cors.default)({})); // connect to db

const database = new _sequelize.Sequelize(config.database);
database.sync().then(() => {
  app.get('/', (req, res) => {
    res.json({
      app: 'praksa'
    }); //rpomeni ovo posle
  });
  app.server.listen(config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
});
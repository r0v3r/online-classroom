// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongooseDebug: process.env.MONGOOSE_DEBUG,
  jwtSecret: process.env.JWT_SECRET,
  mongo: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT
  }
};

module.exports = config;

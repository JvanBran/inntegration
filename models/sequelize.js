const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('integration','root','123456',{
    host: '192.168.1.13',
    port: '19306',
    dialect:'mysql',
    logging: false,
    dialectOptions: {
        charset: "utf8",
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});
module.exports = sequelize
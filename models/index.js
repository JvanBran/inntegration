const sequelize = require('./sequelize.js')
const fs = require('fse')
const path = require('path')
const files = fs.readFileSync(path.join(__dirname))
    // .readFileSync(__dirname)
    // .filter((f)=> !['sequelize.js','index.js'].includes(f) && f.endsWith('.js')
    // )
// for(const f of files){
//     require(path.join(__dirname,f))
// }

const User = require('./user.js')
console.log(User)
sequelize.sync({ force: true})

module.exports = sequelize
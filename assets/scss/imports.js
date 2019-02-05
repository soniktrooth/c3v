// utils.js
const path = require('path')
const resources = [
  '../../node_modules/@animated-burgers/burger-slip/styles.scss',
  '../../node_modules/@animated-burgers/burger/styles.scss',
  'app.scss'
]
module.exports = resources.map(file => path.resolve(__dirname, file))

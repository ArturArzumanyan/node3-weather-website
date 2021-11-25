const fs = require('fs')
// const book = {
//   titel:'Shantaram',
//   author: 'Roberts David'
// }


const readJson = fs.readFileSync('1-json.json').toString()
console.log(readJson)
const parsedJson = JSON.parse(readJson) 
parsedJson.name = 'Arthur'
parsedJson.planet = 'Mars'
parsedJson.age = 27

console.log(parsedJson)

const newObj = JSON.stringify(parsedJson)
fs.writeFileSync('1-json.json', newObj) 

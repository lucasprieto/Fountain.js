const fs = require('fs')
const { tokenize } = require('./index')

const script = fs.readFileSync('./samples/bigfish.fountain').toString()
const tokens = tokenize(script)
console.log(tokens)
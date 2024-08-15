//path is a builtin module

const path = require('path')
console.log(path.sep)//returns a separater

//returns a proper path
//doesnt matter if we give the path format a little wrong (extra //)
const filePath = path.join('/content///', 'subfolder', 'text.txt')
console.log(filePath)

//returns the name of base file
const base = path.basename(filePath)
console.log(base)

//returns an absolute path
const absolute = path.resolve( __dirname,'content', 'subfolder', 'text.txt')
console.log(absolute)
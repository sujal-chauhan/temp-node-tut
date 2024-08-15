// fs module (sync)
//fs (file system) is a builtin module

//this is the different way to access the function of module
//but working is same as previous way
const {readFileSync, writeFileSync} = require('fs')

console.log("start")
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
// console.log(first,second)

//writeFileSync : if file is there, than node will overwrite in it
// if file is not there , the node will create one

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag:'a'} //if we use this, node will append the file instead of overwriting
)

console.log("done with this task")
console.log("starting the next one")
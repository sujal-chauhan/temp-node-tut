// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//importing modules
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') //the fn will run bcoz the module is executed when imported and we are calling the fn in module

console.log(data)
sayHi('sujal')
sayHi(names.john)
sayHi(names.peter)




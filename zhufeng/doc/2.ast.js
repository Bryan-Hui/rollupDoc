const acorn = require('acorn')

let astTree = acorn.parse("import $ from 'jquery'");    
console.log('astTree ',astTree)


let  a = 3
const b = 5


const fn  =   () => {}





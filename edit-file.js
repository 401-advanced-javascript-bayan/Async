'use strict';
const fs = require('fs');
const util = require('util');

const reader = ('./lib/reader.js');

let file = `${__dirname}/data/person.json`;  //we  cant use relative path here
 /////////////////////// read file  //////////////////
let readFilepromisify = util.promisify(fs.readFile);  //its allow you to use promies

readFilepromisify(file)    
    .then(data =>  {
        console.log(' promisify : ',JSON.parse(data.toString())) // our json an object we used parse
        return JSON.parse(data.toString());
    })
.then(data => writeFile( file, data))
.catch(error => console.error('error, promise',error))
// let pro = process.argv;
// console.log('Process.argv', pro)

/////////////////////// write file /////////////////
let writeFilepromisify = util.promisify(fs.writeFile);

const writeFile = (file,data) =>
{
    console.log('before write  : ', data);
    data.firstName = 'bayan ';
    data.hair.color ='brown';                 //// from person.json
    data.kids=0;
    console.log('after update  : ', data);
    let newData = JSON.stringify(data);
    writeFilepromisify(file,newData)
}

module.exports={readFilepromisify,writeFilepromisify} ;
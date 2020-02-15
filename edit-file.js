'use strict' ;


const fs = require('fs') ;
const util = require('util') ;



/////////////////////// read file /////////////////
const readFile = util.promisify(fs.readFile) ;  //its allow you to use promies
const readerFuncPromise = (file) => {
  return readFile(file)
    .then( (data) => {
      return data ;
    })
    .catch(error => error);
};



/////////////////////// write file /////////////////
const writeFile = util.promisify(fs.writeFile) ;
const writerFuncPromise = (file , data) => {
  return writeFile(file , data);
};



module.exports = { readerFuncPromise ,writerFuncPromise };
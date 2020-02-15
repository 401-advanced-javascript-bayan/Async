/* eslint-disable no-unused-vars */
'use strict';

const fs = require('fs');
const util = require('util');

//////////////////////// Reading the file ///////////////////
const readWithCallBack = (file,callback)=>
{
  fs.readFile(file , (error,data)=>    //if error dosent work will read my file 
  {
    if(error) {callback(error);}       
    callback(undefined,data);    // error always undefined and null 

  });                                  // disk read in binary format so if undefind wont read data
};
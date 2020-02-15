'use strict';
const editor = require('../edit-file.js') ;
const path = require('path');   //my path
describe('file modules' , () => {

  describe('using promise ' , () => {
    it(' can i read the file as a string' , () => {
      let file = `${__dirname}/../../data/person.json`; // we using our personal data
      return editor.readerFuncPromise(file)
        .then( (data) => { 
          expect(typeof(data.toString().trim())).toEqual('string'); //removes whitespace from both side string
        });
    });

    it(' Accepts a file name ' , () => {
      let file = `${__dirname}../data/person.json`;
      let fileName = path.basename(file);
      process.argv.push(fileName);
      //process.argv
      expect(process.argv[process.argv.length-1]).toEqual(fileName);
    });



    // change on my file   
    // to send it again to the file 

    it('change firstname value in the object file', () => {
      let file = `${__dirname}../data/person.json`;
      return editor.readerFuncPromise(file)
        .then( (data) => { 
          let jsonData = JSON.parse(data.toString().trim());
          return jsonData ;
        })
        .then((data) => {
          data.firstName = 'bayan' ;
          let buffData = Buffer.from(JSON.stringify(data));   //my callback function 
          //console.log('buffData',buffData),
          return editor.writerFuncPromise(file, buffData);
        })
        .then(() => {
          return editor.readerFuncPromise(file)
            .then( (data) => { 
              let jsonData = JSON.parse(data.toString().trim());
              return expect(jsonData.firstName).toEqual('bayan');
            });
        })
        .catch((error) => { return error ;}) ;
        
    });

    it(' values remain the same after change', () => {
      let file = `${__dirname}../data/person.json`;
      return editor.readerFuncPromise(file)
        .then( (data) => { 
          let jsonData = JSON.parse(data.toString().trim());
          return jsonData ;
        })
      // .then((data) => {
        //     data.firstName = 'bayan' ;
        //     let buffData = Buffer.from(JSON.stringify(data));
        //     return writerFuncPromise(file, buffData);
        //   })
        .then((data) => {
          data.firstName = 'bayan' ;
          let buffData = Buffer.from(JSON.stringify(data));
          return editor.writerFuncPromise(file, buffData);
        })
        .then(() => {
          return editor.readerFuncPromise(file)
            .then( (data) => { 
              let jsonData = JSON.parse(data.toString().trim());
              return expect(jsonData.lastName).toEqual('mohmmd');
            });
        })
        .catch((error) => { return error ;}) ;
          
    });
    
  });  

});
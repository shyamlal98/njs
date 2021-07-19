
/***
 * Read and Write Sync File
 */
const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/subfolder/first.txt','utf-8');
const second = readFileSync('./content/subfolder/second.txt','utf-8');

writeFileSync('./content/subfolder/result-sync.txt',
            `\nHere is the result :${first}, ${second}`,{flag:'a'})

/***
 * Async File read and write
 */

 const {readFile,writeFile} = require('fs');

 readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
     if(err){
         console.log(err);
         return
     }
     const first = result;
 
     readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{
         if(err){
             console.log(err);
         }
         const second = result;
 
         writeFile('./content/result-async.txt',
         `Here is our result ${first}, ${second}`,
         (err,result)=>{
             if(err){
                 console.log(err)
             }
             console.log(result)
         })
     })
 })
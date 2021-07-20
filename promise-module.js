const {readFile,writeFile} = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     });
// }


// getText('./content/subfolder/first.txt')
//     .then((result)=>{console.log(result);})
//     .catch((err)=>{console.log(err)});

// const start = async()=>{
//     try{
//         const first = await getText('./content/subfolder/first.txt','utf-8')
//         const second = await getText('./content/subfolder/second.txt','utf-8')
//         console.log(`${first},${second}`)
//     }catch(error){
//         console.log(error);
//     }


// }

// const start = async()=>{
//     try{
//         const first = await readFilePromise('./content/subfolder/first.txt','utf-8');
//         const second = await readFilePromise('./content/subfolder/second.txt','utf-8');
//         await writeFilePromise('./content/result-mindgrabade-async.txt',`This is awesome : ${first} ${second}`);
//         console.log(`${first},${second}`);
//     }catch(error){
//         console.log(error);
//     }
// }

const start = async()=>{
    try{
        const first = await readFile('./content/subfolder/first.txt','utf-8');
        const second = await readFile('./content/subfolder/second.txt','utf-8');
        await writeFile('./content/result-mindgrabade-async.txt',`\nThis is awesome : ${first} ${second}`,{flag:'a'});
        console.log(`${first},${second}`);
    }catch(error){
        console.log(error);
    }
}

start();
const { Console } = require('console');
const os = require('os');

const user = os.userInfo();

console.log(user);

console.log(`This System Uptime is ${os.uptime()}`)

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs);
// const test = require("./test");
const winston = require("winston");
const path = require("path");
const dir = path.join(__dirname, "logs");
const cp =require("child_process");
const logger = winston.createLogger({
    format: winston.format.simple(),
    level: 'info',

    transports: [
        new winston.transports.File({ filename: path.join(dir,'error.log'), level: 'error' }),
    ]
})
console.log(process.cwd());
// var _test = new test();
// _test.run("xk-tools", (err, output, stderr) => {
//     if (err) _test.log("error",err);
//     if (output){

//     }
// });
// console.log(result);

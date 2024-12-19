const cp = require("child_process");
const chalk = require("chalk");
const fs = require("fs");

const path = require("path");
const logger = require("./_logger");
let loggerObj = new logger();
const logDir = path.join(__dirname, "logs");
const handleExit = () => {
  log("Exiting without error.");
  process.exit();
};
const handleError = (e) => {
  log("\x1b[31mError:", e, "\x1b[0m");
  loggerObj.output("error",e);
  process.exit(1);
};
process.on("unhandledRejection", (err) => {
  handleError(err);
});
const log = console.log;

const output = (name,content) => {
  fs.createWriteStream(path.join(logDir,`${name}.log`))
};
log(chalk.cyan("Clearing logs..."));

// fs.readdirSync(logDir).forEach((file) => fs.rmSync(path.join(logDir, file),{force: true}));
log("running test...");

const run = (cmd, logPath) => {
  let child = cp.exec(`${cmd}`);
  child.buffer();
  
  child.on("error",(e)=>{
    
  });
  
};

let result = run("xk-tools", path.join(logDir, "cmd_main.log"));

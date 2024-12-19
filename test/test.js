const cp = require("child_process");
const chalk = require("chalk");
const fs = require("fs");
const winston = require("winston");
const {createLogger,format,transports} = require('winston');
const path = require("path");
const join = path.join;

class Test {
  constructor() {
    console.log("Initiating test...");
    this.stdin = process.stdin;
    this.stdout = process.stdout;
    this.stderr = process.stderr;
    this.log_dir = path.join(__dirname, "logs");
    if (!fs.existsSync(this.log_dir)) {
      fs.mkdirSync(this.log_dir);
    }
    this.logs = {
      error: join(this.log_dir, "error.log"),
      info: join(this.log_dir, "info.log"),
      activity: join(this.log_dir, "activity.log"),
    };
    process.on("unhandledRejection", (stream) => {});

    console.log("Creating Logger...");
    const jsonFormat = format.json();
        this.logger = winston.createLogger({
      format: format.simple(),
      level: "info",
      transports: [
        new transports.File({
          filename: path.join(this.log_dir, "error.log"),
          level: "error",
        }),
      ],
    });
    
  }
  /**
   *
   * @param {"error"|"info"} type
   * @param {any} content
   */
  log(type, content) {
    let date = new Date();
    // let file = path.join(this.log_dir, `${type}.log`);
    this.logger.log(type)
  }
  /**
   *
   * @param {string} cmd
   */
  runSync(cmd) {
    console.log(`running ${cmd}:`);
    return cp.execSync(cmd, { stdio: [this.stdin, this.stdout, this.stderr] });
  }

  /**
   *
   * @param {string} cmd
   * @param {runCallback} cb
   */
  runCmd(cmd, cb) {
    let child = cp.exec(cmd, function (err, stdout, stderr) {
      cb(err, stdout);
    });
  }
}
/**
 * @callback runCallback
 @param {cp.ExecException} err
 @param {string} stdout
 @param {string} stderr
 */
module.exports = Test;

#!/usr/bin/env node
"use strict";
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const util = require("util");
const relative = (from, to) => path.relative(from, to);
const join = path.join;
/**
 * initialize logger
 */
function logger() {
  this.dir = path.join(__dirname, "logs");
  this.logPaths = {
    error: join(this.dir, "error.log"),
    info: join(this.dir, "info.log"),
    activity: join(this.dir, "activity.log"),
  };
  this.log_file = null;
  if (fs.existsSync(this.dir)) {
  } else {
    fs.mkdirSync(this.dir);
  }
  /**
   *
   * @param {"error"|"info"|"activity"} _type
   * @param  {...any} content
   */
  this.log = (_type, ...content) => {
    let keys = Object.keys(this.logPaths);
    if (keys.includes(_type)) {
    }
  };
  /**
   *
   * @param {"error"|string} name
   * @param {any} content
   */
  this.output = (name, content) => {
    let file = join(this.dir,`${name}.log`);
    let log_file = fs.createWriteStream(file, {
      flags: "a",autoClose: true,
    });    
    log_file.write(content);
    log_file.close();
  };
}
class Logger{
    constructor() {
        this.stdin = process.stdin;
    }
}

module.exports = logger;

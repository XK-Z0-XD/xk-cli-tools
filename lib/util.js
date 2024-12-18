#!/usr/bin/env node
"use strict";

//imports
const chalk = require("chalk");
const commander = require("commander");
const fs = require("fs");
const path = require("path");
const pkg = require("../package.json");
const prompts = require("prompts");
const conf = require("conf");
const log = console.log,
  error = console.error;

/**

 * @typedef {object} cmd cmd object
  @property {boolean} enabled is command enabled?
  @property {cmdr.Command} command command object
 */
/**
 * prints to console
 * @param {chalk.Chalk} color 
 * @param  {...any[]} msg 
 @type {void}
 */
const print = (color, ...msg) => {
  console.log(color(...msg));
};

/**
 * gets command name from file
 * @param {string} file
 * @returns {string}
 */
const cmdName = (file) => {
  return file.substring(file.lastIndexOf(path.sep) + 1, file.indexOf(".js"));
};
/**
 * 
 * @returns {cmd[]} 
 */
const getCommands = () => {
const dir = path.join(__dirname,"commands")
  let files = fs.readdirSync(dir);
  const nonCmds = ["main", "template", "util", "index"];
  let cmds = []
  let total = 0;
  files.forEach((file) => {
    if (/\.js$/gm.test(file)==true) {
      let name = file.substring(0, file.indexOf(".js"));
      if (!nonCmds.includes(name)) {
        const fp = path.join(dir, file);
        /**@type {import("./util").cmd} */
        const _cmd = require(fp);
        if (_cmd.enabled == true) {
          cmds.push[_cmd];
        }
      }
    }
  });
  return cmds;
};
/**
 * cli version
 */
const _version = pkg.version;
module.exports = {
  print,
  chalk,
  cmdr: commander,
  path,
  fs,
  log,
  error,
  cmdName,
  _version,
  getCommands,
  prompts,
  conf
};

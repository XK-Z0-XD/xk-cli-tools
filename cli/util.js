#!/usr/bin/env node
/**  */
"use strict";

//imports
const chalk = require("chalk");
const commander = require("commander");
const fs = require("fs");
const path = require("path");
const pkg = require("../package.json");
const prompts = require("prompts");
const enquirer = require("enquirer");
const conf = import("conf");
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
 * gets command name from file/dir
 * @param {string} fp
 * @returns {string}
 */
const getName = (fp) => {
  if (fs.statSync(fp).isDirectory()) {
    return fp.substring(fp.lastIndexOf(path.sep) + 1, fp.length);
  } else return fp.substring(fp.lastIndexOf(path.sep) + 1, fp.indexOf(".js"));
};
/**
 *
 * @returns {cmd[]}
 */
const getCommands = () => {
  const dir = path.join(__dirname, "commands");
  let files = fs.readdirSync(dir);
  const nonCmds = ["main", "template", "util", "index"];
  let cmds = [];
  let total = 0;
  files.forEach((file) => {
    if (/\.js$/gm.test(file) == true) {
      let name = file.substring(0, file.indexOf(".js"));
      if (!nonCmds.includes(name)) {
        const fp = path.join(dir, file);
        /**@type {import("xk-cli-tools/cli/util").cmd} */
        const _cmd = require(fp);
        if (_cmd.enabled == true) {
          cmds.push[_cmd];
        }
      }
    }
  });
  return cmds;
};
const cmdFunctions = (folder) => {

};
const getVersion = () => pkg.version;
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
  getName,
  getCommands,
  prompts,
  conf,
  enquirer,
  version: pkg.version,
};

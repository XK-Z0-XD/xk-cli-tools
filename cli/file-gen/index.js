#!/usr/bin/env node
/**
 * file generation log
 */
"use strict";

const { chalk, print, path, getName, log } = require("../util");
const { Command } = require("commander");
const generate = require("./generate.js");
const program = new Command();
// command configurations
const name = getName(__dirname);
const desc = "Generate Files";
// FUNCTIONS HERE
function execute(dir, ext, options) {
  logger({}, dir, ext);
  logger({}, options);
}

/** command  */
program
  .name(name)
  .description(desc)
  .argument("[dir]", "directory")
  .argument("[ext]", "file extension")
  .option("--template", "generate from template")
  .option("--files", "files to generate")
  .option("--list-templates", "list all templates")

  .action(execute);
// .action((...args) => {
//   log(`${program.name} executed`);
//   log(...args)
// });

module.exports = program;

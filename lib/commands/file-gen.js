#!/usr/bin/env node
/**
 * Template Command
 */
 "use strict";

const { chalk, print, path, cmdName, _version, log } = require("../util");
const { Command } = require("commander");
/**@type {import("commander").Command} */
const program = new Command();
const name = cmdName(__filename);

/** command  */
program
  .name(name)
  .description("Template Command Description")
  .argument("<arg>","Argument")
  .option("--opt","Option")
  .action((...args) => {
    log(`${program.name} executed`);
  });
module.exports = program;

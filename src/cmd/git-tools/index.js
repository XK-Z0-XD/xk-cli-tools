#!/usr/bin/env node
/**
 * git tools
 */
"use strict";
const { chalk, print, path, getName, log } = require("../../util");
const { Command } = require("commander");
const program = new Command();
const name = getName(__dirname);
// FUNCTIONS HERE 



/** command  */
program
  .name(name)
  .description("Template Command Description")
  .option("--opt","Option")
  .action((...args) => {
    log(`${program.name} executed`);
  });
program
.command("save")
.description("Save git project");

module.exports = program;

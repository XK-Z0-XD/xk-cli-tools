#!/usr/bin/env node
/**
 * Command Name
 */
"use strict";

const { chalk, print, path, getName, log } = require("../util");
const { Command } = require("commander");
/**@type {import("commander").Command} */
const program = new Command();
// command configurations
const name = getName(__dirname);
const desc = "CMD description"
// FUNCTIONS HERE 



/** command  */
program
  .name(name)
  .description(desc)
  .argument("<arg>","Argument")
  .option("--opt","Option")
  .action((...args) => {
    log(`${program.name} executed`);
  });
module.exports = program;

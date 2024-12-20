#!/usr/bin/env node
/**
 * Command Name
 */
"use strict";

const {  getName, log } = require("./util");
const { Command } = require("commander");
//command object
const program = new Command();
// command configurations
const name = getName(__filename);
const desc = "Print Information"
// FUNCTIONS HERE 



/** command  */
program
  .name(name)
  .description(desc)
  .option("--os","Print Operating System info")
  .option("--env","Print Environment Variables")
  .action((...args) => {
    log(`${program.name} executed`);
  });
module.exports = program;

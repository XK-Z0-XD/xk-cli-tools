#!/usr/bin/env node
/**
 * to do commands
  
 */
"use strict";

const { chalk, print, path, getName, log } = require("../util");
const { Command } = require("commander");

const program = new Command();
const name = getName(__dirname);
const desc = "todo command";
// FUNCTIONS HERE

/** command  */
program
  .name(name)
  .description(desc)
  .action((...args) => {
    log(`${program.name} executed`);
  });
  
module.id = "todo";
module.exports = program;

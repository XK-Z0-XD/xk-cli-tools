#!/usr/bin/env node
import { Command, getName, log } from "../../utils";
const name = getName(__dirname);
const program = new Command(name);
const desc = "generate file";
program
  .description(desc)
  .argument("<dir>", "directory")
  .option("--opt", "Option")
  .action((...args: any[]) => {
    log(`This is a template command. it does not do anything :)`);
  });

module.exports = program;

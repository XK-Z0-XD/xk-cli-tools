#!/usr/bin/env node
import { Command, getName, log } from "../utils";
const name = getName(__filename);
const program = new Command(name);

const desc = "Add description";
program
  .description("Template Command Description")
  .argument("<arg>", "Argument")
  .option("--opt", "Option")
  .action((...args: any[]) => {
    log(`${program.name} executed`);
  });

module.exports = program;

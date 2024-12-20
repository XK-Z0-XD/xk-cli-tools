#!/usr/bin/env node
import { Command, getName, log } from "../../utils";
const name = getName(__dirname);
const program = new Command(name);
const desc = "Add description";
program.description(desc).action((...args: any[]) => {
  log(`${program.name} executed`);
});
program
.command("create")
.description("create journal");

module.exports = program;

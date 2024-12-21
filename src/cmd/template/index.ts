#!/usr/bin/env node
import { colors, Command, getName, log } from "../../utils";
import { helpConfig, outputConfig } from "../config";
const name = getName(__dirname);
const program = new Command(name);
const desc = "Add description";
program
  .description(colors.cmdDesc(desc))
  .argument("<arg>", colors.argDesc("argument"))
  .option("--opt", colors.optDesc())
  .action((...args: any[]) => {
    log(`This is a template command. it does not do anything :)`);
  })
  .configureHelp(helpConfig)
  .configureOutput(outputConfig);

module.exports = program;

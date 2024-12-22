#!/usr/bin/env node
import { Command, getName, log } from "../../utils";
import { helpConfig, outputConfig } from "../config";
const name = getName(__dirname);
const program = new Command(name);
const desc = "info command";

program
  .description(desc)
  .argument("<>", "argument")
  .option("--os", "Print Operating System info")
  .option("--env", "Print Environment Variables")
  .action((...args: any[]) => {
    log(`This is a template command. it does not do anything :)`);
  })
  .configureHelp(helpConfig)
  .configureOutput(outputConfig);

module.exports = program;

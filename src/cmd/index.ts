#!/usr/bin/env node
import { Command, chalk, colors } from "../utils";
import { helpConfig, outputConfig } from "./config";
const pkg = require("../../package.json");
const program = new Command(pkg.name);
const example  = require("./example");
const git = require("./git-cli");
const todo = require("./todo");
const fg = require("./file-gen");
//get all
program
  .description(colors.info(pkg.description))
  .version(colors.info(pkg.version))
  .configureOutput({
    outputError(str, write) {
      write(chalk.red.bold(str));
    }
  });
  //COMMANDS
program
  .addCommand(git)
  .addCommand(todo)
  .addCommand(example)
  .configureHelp(helpConfig)
  .configureOutput(outputConfig);
  // .helpInformation()
module.exports = program;

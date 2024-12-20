#!/usr/bin/env node
import { Command, chalk } from "../utils";
const pkg = require("../../package.json");
const program = new Command(pkg.name);
const git = require("./git-tool");
const todo = require("./todo");
const fg = require("./file-gen");
//get all
program
  .description(pkg.description)
  .version(pkg.version)
  .configureOutput({
    outputError(str, write) {
        write(chalk.red.bold(str));
    },
    
  });
  //COMMANDS
program
  .addCommand(git)
  .addCommand(todo);

module.exports = program;

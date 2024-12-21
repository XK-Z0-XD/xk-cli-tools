#!/usr/bin/env node
import { Command, chalk, colors } from "../utils";
import { helpConfig } from "./config";
const pkg = require("../../package.json");
const program = new Command(pkg.name);

const git = require("./git-tool");
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
  .configureHelp(helpConfig);
  // .helpInformation()
module.exports = program;

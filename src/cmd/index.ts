#!/usr/bin/env node
import { Command, colors } from "../utils";
import { helpCmdConfig, helpConfig, outputConfig } from "./config";
const pkg = require("../../package.json");
const program = new Command("xkc");
const example = require("./example");
const git = require("./git-cli");
const todo = require("./todo");
const fg = require("./file-gen");
const info = require("./info");
//get all
program

  .description(colors.info(pkg.description))
  .version(colors.info(pkg.version))
  .configureHelp(helpConfig);

//COMMANDS
program
  .addCommand(git)
  .addCommand(todo)
  .addCommand(example)
  .addCommand(info)
  .configureHelp(helpCmdConfig)
  .configureOutput(outputConfig);
// .helpInformation()
module.exports = program;

#!/usr/bin/env node
import { Command, chalk, colors } from "../utils";
import { helpConfig, outputConfig } from "./config";
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
  .argument("<command>")
  .configureOutput({
    outputError(str, write) {
      write(chalk.red.bold(str));
    },
  });
//COMMANDS
program
  .addCommand(git)
  .addCommand(todo)
  .addCommand(example)
  .addCommand(info)
  .configureHelp({
    ...helpConfig,
    visibleCommands: (cmd) => {
      let cmds: Command[] = [];
      cmd.commands.forEach((value, index: Number) => {
        value.configureHelp(helpConfig).configureOutput(outputConfig);
      });
      return cmds;
    },
  })
  .configureOutput(outputConfig);
// .helpInformation()
module.exports = program;

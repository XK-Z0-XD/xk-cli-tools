#!/usr/bin/env node
import { _name, chalk, colors, Command, exec, getName, log } from "../../utils";
import { helpConfig, outputConfig } from "../config";
const name = getName(__dirname);
const dir = getName(__dirname);
const program = new Command();
// action functions
const save = require("./save");
const info = require("./info");

const status = require("./status");
const desc = "cli tools for git";
//TODO: print info action
const action = (options: { status?: any } | undefined) => {
  if (options) {
    log(options);
    if (options.status) {
      status();
    }
  }
};
program
  .name(name)
  .description(chalk.cyan.bold(desc))
  .usage(colors.usage(`${_name} ${name} [options]`))
  .option("-s,--status", "git status")
  .option("-b,--branch", "git branch")
  .option("--info", "print repo info")
  .action(info)
  .configureHelp(helpConfig)
  .configureOutput(outputConfig);

program
  .command(`save`)
  .description("save current git repository")
  .option(
    "-a",
    "add & commit all files (excluding files specified in .gitignore)"
  )
  .action(save);

program
  .command("sync")
  .description(chalk.cyan("push to remote branch"))
  .action((branch) => {
    let child = exec(`git push`);
  });

module.exports = program;

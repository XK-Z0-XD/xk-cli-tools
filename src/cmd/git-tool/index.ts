#!/usr/bin/env node
import { _name, chalk, Command, getName, log } from "../../utils";
const name = getName(__dirname);
const dir = getName(__dirname);
const program = new Command();
// action functions
const save = require("./save");
const status = require("./status");
const desc = "cli tools for git";

program
  .name(name)
  .description(chalk.cyan.bold(desc))
  .usage(chalk.cyanBright.underline(`${_name} ${name} [options]`))
  .option("-s,--status", "git status")
  .action((options) => {});
program
.command(`save`)
.description("save current git repository")
.action(save);
program
.command("add")
.description("save current git repository")
.action(save);
program
  .command("upload <branch>")
  .description(chalk.cyan("push to remote branch"))
  .action(()=>{log()});
module.exports = program;

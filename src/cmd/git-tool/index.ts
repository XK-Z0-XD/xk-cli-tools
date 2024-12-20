#!/usr/bin/env node
import { _name, chalk, Command, exec, getName } from "../../utils";
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
  .action((options: { status?: any } | undefined) => {
    if (options) {
      if (options.status) {
        status();
      }
    }
  });
program
  .command(`save`)
  .description("save current git repository")
  .option(
    "-a",
    chalk.cyan(
      "add & commit all files (excluding files specified in .gitignore)"
    )
  )
  .action(save);
// program.command("add").description("save current git repository").action(save);

program
  .command("sync")
  .description(chalk.cyan("push to remote branch"))
  .action((branch) => {
    let child = exec(`git push `);
  });

module.exports = program;

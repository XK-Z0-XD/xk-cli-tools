#!/usr/bin/env node
import { readdirSync } from "fs";
import { chalk, colors, Command, exec, getName, log } from "../../utils";
import { helpConfig, outputConfig } from "../config";
const name = getName(__dirname);
const dir = getName(__dirname);
const program = new Command();

// action functions
const save = require("./save");
const _action = require("./git-action");
const desc = "cli tools for git";
//TODO: print info action
program
  .name(name)
  .description(chalk.cyan.bold(desc))
  // .usage(colors.usage(`${_name} ${name} [options]`))
  // .option("-s,--status", "git status")
  // .option("-b,--branch", "git branch")
  // .option("--info", "print repo info")
  // .option("--view", "print repo info")
  .action(()=>{
    _action();
  })
  .configureHelp(helpConfig)
  .configureOutput(outputConfig);
const main = (options?: { status?: any; info?: any }) => {
  const root = process.cwd();
  const out = (err?: any, stdout?: string, stderr?: string) => {
    if (err) {
      log(colors.error(err.stdout));
    }
    log(stdout);
    log(colors.error(stderr));
  };
  if (options) {
    if (readdirSync(root).includes(".git")) {
      log(options);
      if (options.status) {
        exec("git status", out);
      } else if (options.info) {
      }
    } else {
      log(colors.error("This directory is not a git repository"));
      program.help();
    }
  } else {
    program.help();
  }
};
// program
//   .command(`save`)
//   .description("save current git repository")
//   .option(
//     "-a",
//     "add & commit all files (excluding files specified in .gitignore)")
//   .action(save);
// program
// .command("view")
// .description("view repo information")
// .action(view);
// program
//   .command("sync")
//   .description(chalk.cyan("push to remote branch"))
//   .action((branch) => {
//     let child = exec(`git push`);
//   });

module.exports = program;

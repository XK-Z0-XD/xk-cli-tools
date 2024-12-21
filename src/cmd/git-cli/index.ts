#!/usr/bin/env node
import { readdirSync } from "fs";
import {
  chalk,
  colors,
  Command,
  exec,
  getName,
  log,
  outputStdio,
} from "../../utils";
import { helpConfig, outputConfig } from "../config";
const name = getName(__dirname);
const dir = getName(__dirname);
const program = new Command();

// action functions
const save = require("./save");
const _action = require("./git-action");
const view = require("./action/view-info");
const desc = "cli tools for git";
// const opts: Option
//TODO: print info action
program
  .name(name)
  .description(chalk.cyan.bold(desc))
  // .usage(colors.usage(`${_name} ${name} [options]`))
  .option("-s,--status", "git status")
  .option("-b,--branch", "git branch")
  .option("--log", "git log")
  .option("--info", "print repo info")
  .action((options?: { status?: any; info?: any }) => {
    const root = process.cwd();
    log(options);
    if (options) {
      if (readdirSync(root).includes(".git")) {
        // log(options);
        if (options.status) {
          exec("git status", outputStdio);
        } else if (options.info) {
          view();
        } else view();
      } else {
        log(colors.error("This directory is not a git repository"));
        program.help();
      }
    } else view();
  })
  .configureHelp(helpConfig)
  .configureOutput(outputConfig);
// const main = ;
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

#!/usr/bin/env node
import { chalk, Command, getName } from "../../utils";
import { helpConfig, outputConfig } from "../config";
const name = getName(__dirname);
const dir = getName(__dirname);
const program = new Command();

// action functions

const main = require("./action/git-action");

const desc = "cli tools for git";
// const opts: Option
//TODO: print info action
program
  .name(name)
  .description(chalk.cyan.bold(desc))
  // .usage(colors.usage(`${_name} ${name} [options]`))
  // .option("-s,--status", "git status")
  .option("-b,--branch", "git branch")
  .option("--log", "git log")
  .option("-s,--save", "similar to git commit")
  .option("-i,--info", "git repository info")
  .action((options) => {
    main(options, program);
  })
  // .action(main)
  // .action((options?: { status?: any; info?: any }) => {
  //   const root = process.cwd();
  //   log(options);
  //   if (options) {
  //     if (readdirSync(root).includes(".git")) {
  //       // log(options);
  //       if (options.status) {
  //         exec("git status", outputStdio);
  //       } else if (options.info) {
  //         view();
  //       } else view();
  //     } else {
  //       log(colors.error("This directory is not a git repository"));
  //       program.help();
  //     }
  //   } else view();
  // })
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

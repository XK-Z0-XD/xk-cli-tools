#!/usr/bin/env node
import { chalk, Command, getName, log } from "../../utils";
const name = getName(__dirname);
const program = new Command(name);
const info = chalk.cyan;
const desc = "todo manager tool";
program
  .description(chalk.cyan.bold(desc))
  .option("--set-list", "Option")
  .action((...args: any[]) => {
    log(`${program.name} executed`);
  });
program
  .command("set-ist")
  .argument("<file>", "todo list file ".concat(info.bold("must have .todo extension")))
  .option("-c,--create","creates new todolist file")
  .description(chalk.cyanBright.bold("sets file as active list"));
module.exports = program;

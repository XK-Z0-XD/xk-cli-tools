#!/usr/bin/env node
import { chalk, colors, Command, getName, log } from "../../utils";
const name = getName(__dirname);
const program = new Command();
const info = chalk.cyan;
const desc = "todo manager tool";

const list = require("./list");
//command
program
  .name(name)
  .description(chalk.cyan.bold(desc))
  .option("--set-list", "Option")
  .action((...args: any[]) => {
    log(`${program.name} executed`);
  });

program
  .command("list")
  .description(colors.info("todo list"))
  // .usage(colors.usage.bold(""))
  .argument("<name>", "list items from <name>")
  .option("--set", "set as active list")
  .option("--get", "get items")
  .action(list);
program
  .command("add")
  .description(colors.info("add task"))

// program
//   .command("")
//   .argument(
//     "<file>",
//     "todo list file ".concat(info.bold("must have .todo extension"))
//   )
//   .option("-c,--create", colors.optDesc("creates new todolist file"))
//   .description(colors.cmdDesc("sets file as active list"));
module.exports = program;

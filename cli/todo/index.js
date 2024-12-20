#!/usr/bin/env node
/**
 * to do commands
  
 */
"use strict";

const { path, getName, log } = require("../util");
const { Command } = require("commander");
const list = require("./list");
const add = require("./add");
const markDone = require("./markDone");

const program = new Command();
const name = "todo";
const desc = "todo command";
// FUNCTIONS HERE

/** command  */
program.name("todo").description(desc);
program
  .command("list")
  .description("List all tasks from todolist")
  .action(list);
program
.command("add <task>")
 .description('Add a new TODO task')
.action(add);
program
  .command("create")
  .description("create todolist file")
  .argument('<name>',"name of list")
  .action(() => {
    log(`add command executed`);
  });
program
  .command("mark-done")
  .description("Mark commands done")
  .option(
    "-t, --tasks <tasks...>",
    "The tasks to mark done. If not specified, all tasks will be marked done."
  )
  .action(markDone);
program
  .command("create-list <name>")
  .description("creates todo list file")
  .argument('<filename>',"creates a todo list")
  .action(markDone);
// program
//   .command("mark-done")
//   .description("Mark commands done")
//   .option(
//     "-t, --tasks <tasks...>",
//     "The tasks to mark done. If not specified, all tasks will be marked done."
//   )
//   .action(markDone);

module.id = "todo";
module.exports = program;

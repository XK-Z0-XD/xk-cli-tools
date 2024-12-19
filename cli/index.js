#!/usr/bin/env node
/**
 * Template Command
 */
"use strict";
const log = console.log;
log("\x1b[38;5;10m", "xk-tools executed", "\x1b[0m");
const handleExit = () => {
  log("Exiting without error.");
  process.exit();
};
const handleError = (e) => {
  log("\x1b[31m", e, "\x1b[0m");
  process.exit(1);
};
process.on("unhandledRejection", (err) => {
  handleError(err);
});
// imports
const { pkg } = require("./util");
// const {} = require("./util");
const { Command } = require("commander");
const test_cmd = require("./test");
const todo = require("./todo");
const journal = require("./journal");
const file_gen = require("./file-gen");
const gitTools = require("./git-tools");
const args = process.argv;
const program = new Command();
program.name(pkg.name).description(pkg.description).version(pkg.version);
program.addCommand(test_cmd);
program.addCommand(todo);
program.addCommand(journal);
program.addCommand(file_gen);
program.addCommand(gitTools);

program.parse(args);

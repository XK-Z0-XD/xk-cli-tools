#!/usr/bin/env node
/**
 * Command Name
 */
"use strict";
const { chalk, logger, getName, log } = require("../util");
const config = new (require("conf"))();
const name = getName(__filename);
const cmd = getName(__dirname);
function func() {
  const todoList = config.get("todo-list");
  if (todoList && todoList.length) {
    logger(
      { color: chalk.blue.bold },
      "Tasks in green are done. Tasks in yellow are still not done."
    );
    todoList.forEach((task, index) => {
      if (task.done) {
        logger({ color: chalk.greenBright }, `${index}. ${task.text}`);
      } else {
        logger({ color: chalk.yellowBright }, `${index}. ${task.text}`);
      }
    });
  } else {
    log(chalk.red.bold("You don't have any tasks yet."));
  }
}
module.exports = func;

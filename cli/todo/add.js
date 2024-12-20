#!/usr/bin/env node
/**
 * Command Name
 */
"use strict";
const { chalk, logger, conf, getName } = require("../util");
const config = new conf();
const name = getName(__filename);
function funct(task) {
  //get the current todo-list
    let todosList = config.get('todo-list')

    if (!todosList) {
        //default value for todos-list
        todosList = []
    }

    //push the new task to the todos-list
    todosList.push({
        text: task,
        done: false
    })

    //set todos-list in conf
    config.set('todo-list', todosList)

    //display message to user
    logger({color:chalk.green.bold},'Task has been added successfully!')
}
module.exports = funct;

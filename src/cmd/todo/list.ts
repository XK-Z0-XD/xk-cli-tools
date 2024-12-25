#!/usr/bin/env node

import { prompt } from "enquirer";
import { color, colors, Command, getName, log } from "../../utils";
import { getConfig } from "./config";
const name = getName(__filename);
let config = getConfig();
const setList = (name?: string) => {
  if (name) {
    log(colors.info("setting list to ", name));
  } else {
    prompt([
      { type: "input", name: "listId", message: "List Name: " },
      { type: "input", name: "filepath", message: "Filepath: " },
    ])
      .then((value: object) => {
        log(colors.info("values: "), value);
        let list = config.get("lists");
        if (!list) list = [];
      })
      .catch(console.error);
  }
};
const getList = (name?: string) => {
  let currentList = config.get("current-list");

  if (!currentList) {
    log(color.error("There is no current todo list"));
  } else {
    log(colors.info("Current List: "), color.info(currentList));
    let tasks = config.get("tasks");
    if (!tasks) tasks = [];
    else {
      log("tasks: ");
      //@ts-ignore
      tasks.forEach((t) => {
        if (t.done == true) {
          log(color.success(`[X] ${t.id}: ${t.text}`));
        } else
          log(colors.warning(`[ ] ${t.id}: ${t.text}`));
      });
    }
  }
};
/**
 *
 * @param name name of list
 * @param options
 * @param program
 */
const action = (name?: string, options?: any, program?: Command) => {
  if (options && options.length > 0) {
    if (options.setList) {
      // set file as current todo file
      setList(name);
    } else if (options.getList) {
      // print filename
      log(colors.info("getting todo-list from ", name));
      getList(name);
    } else getList();
  } else {
    getList();
  }
};
module.exports = action;

#!/usr/bin/env node
import { Task } from "../../typings/lib";
import { colors, log } from "../../utils";
import { getConfig } from "./config";
const config = getConfig();
const action = (id: number) => {
  
  //TODO: MARK TASK A DONE (set boolean to true).
  let tasks: Task[] | unknown | undefined = config.get("tasks");
  let updated = [];
  if (tasks) {
    //@ts-ignore
    tasks = tasks.map((task: Task, index:number) => {
      if (task.id == id) {
        //mark task as done
        task.dateDone = new Date().toISOString();
        task.done = true;
        log(colors.success(`Task #${task.id} done on ${task.dateDone}`),`\n${task.text}`);
      }
      return task;
    });
    config.set("tasks",tasks);
  }else{
    log(colors.error("There are no tasks to complete."))
  }
};
module.exports = action;

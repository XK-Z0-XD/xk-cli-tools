#!/usr/bin/env node
//@ts-nocheck
import { color, getName, log } from "../../utils";
import { getConfig } from "./config";
const config = getConfig();
const name = getName(__filename);
const action = (task:any) =>{
    let tasks= config.get("tasks");
    if (!tasks){
        tasks = []
    }
    let _task = {
      id: tasks.length,
      text: task,
      done: false,
      dateCreated: new Date().toISOString(),
      dateCompleted: null,
    };
    tasks.push(_task)
    config.set("tasks",tasks);
    log(color.success("New Task Added."))
}
module.exports = action;

#!/usr/bin/env node
import { colors, Command, getName, log } from "../../utils";
import { helpConfig, outputConfig } from "../config";
const name = getName(__dirname);
const program = new Command();
const desc = "todo list manager tool";

const list = require("./list");
const addTask = require("./add");
const markDone = require("./mark-done");
//command
program
  .name(name)
  .description(desc)
  // .option("-s,--set-list", "set as active todo list")
  // .option("-g,--get-list", "get items")
  // .option("-g,--get-list", "get items")
  .option("--info","Print Todo Information")
  .configureHelp(helpConfig)
  .configureOutput(outputConfig)
  .action(options=>{
    if (options){
      if (options.info){
        log("Information:");
        log("Completed Task is in ",colors.success("Green") );
        log("Incompleted Task is in ",colors.warning("Yellow") );

      }else program.help();
    }else program.help();
  });

program
  .command("list")
  .description(colors.info("todo list"))
  .argument("[name]", "list items from <name>")
  .option("--set-list", "set as active todo list")
  .option("--get-list", "get items")
  .action((name, options) => list(name, options, program));
program
  .command("add")
  .argument("task")
  .description(colors.info("add task"))
  .action(( task : any) => addTask(task));
program
  .command("complete")

  .argument("<number>","Task number")
  .description("Complete Task")
  .action(( id : number) => markDone(id));

module.exports = program;

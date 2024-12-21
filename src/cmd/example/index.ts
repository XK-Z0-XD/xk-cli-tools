#!/usr/bin/env node
import { Command, getName, log } from "../../utils";
import { helpConfig, outputConfig } from "../config";
const { Select } = require("enquirer");
const name = getName(__dirname);
const program = new Command(name);
const desc = "example command";
program
  .description(desc)
  .argument("[arg]", "argument")
  .option("--opt", "option")
  .action((...args: any[]) => {
    log(`This is a template command. it does not do anything :)`);
    const _prompt = new Select({
      name: "color",
      message: "Pick a flavor",
      choices: ["apple", "grape", "watermelon", "cherry", "orange"],
    });
    _prompt
      .run()
      .then((answer: any) => console.log("Answer:", answer))
      .catch(console.error);
  })
  .configureHelp(helpConfig)
  .configureOutput(outputConfig);

module.exports = program;

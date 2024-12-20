#!/usr/bin/env node
import { prompt } from "enquirer";
import { chalk, execSync, getName, print } from "../../utils";
const name = getName(__filename);
const action = (...args: any[]) => {
  print({ color: chalk.cyanBright }, "Press Ctrl+C to cancel anytime");

  // const git_add = ;
  prompt({type: "input",name: "git_add", message: "git add "})
    .then((directory) => {
      execSync(`git add ${directory}`);
    })
    .catch(console.error);
};
module.exports = action;

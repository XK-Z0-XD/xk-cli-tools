#!/usr/bin/env node
import { Option } from "commander";
import { prompt } from "enquirer";
import { chalk, getName, print } from "../../utils";
const name = getName(__filename);
const action = (options: Option) => {
  print({ color: chalk.cyanBright }, "Press Ctrl+C to cancel anytime");

  const git_cmd = {
    add: { type: "input", name: "add", message: "add files: " },
    commit: { type: "input", name: "commit", message: "commit message: " },
  };
  const doAction = async () => {
    const response = await prompt([
      { type: "input", name: "git_add", message: "git add " },
      { type: "input", name: "commit", message: "commit message: " },
    ]);
  };
  prompt(git_cmd.add)
    .then((directory) => {
      // execSync(`git add ${directory}`);
      prompt(git_cmd.commit).then((result) => {
        
      });
    })
    .catch(console.error);
};
module.exports = action;

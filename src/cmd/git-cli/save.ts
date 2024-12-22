#!/usr/bin/env node
import { Option } from "commander";
import { prompt } from "enquirer";
import { colors, getName, log } from "../../utils";
const name = getName(__filename);
const action = (options: Option) => {
  log(colors.info("initiating git add..."));
  log(colors.info("Press Ctrl+C to cancel anytime"));
  const git_cmd = {
    add: { type: "input", name: "add", message: "add files: " },
    commit: { type: "input", name: "commit", message: "commit message: " },
  };
  const questions = [{ type: "input", name: "git_add", message: "git add " }];
   prompt([
     { type: "input", name: "items", message: "list all files to add" },
     { type: "input", name: "msg", message: "commit message: " },
   ]).then(({items,msg}:any)=>{
      log(colors.info(`adding ${items}...`));
      log(colors.info(`commiting ${msg}...`));

   })
  // prompt(git_cmd.add)
  //   .then((directory) => {
  //     // execSync(`git add ${directory}`);
  //     prompt(git_cmd.commit).then((result) => {
        
  //     });
  //   })
  //   .catch(console.error);
};
module.exports = action;

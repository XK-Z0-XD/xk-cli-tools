#!/usr/bin/env node

import { color, log } from "../../utils";

const git_cmds = [`git status`, "git config"];
const action = (options?: { status?: any; info?: any }) => {
  const out = (err?: any, stdout?: string, stderr?: string) => {
    if (err) {
      log(color.error(err.stdout));
    }
    log(stdout);
    log(color.error(stderr));
  };
  // if (options) {
  //   if (fs.readdirSync(process.cwd()).includes(".git")) {
  //     log(options);
  //     if (options.status) {
  //       exec("git status", out);
  //     } else if (options.info) {
  //     }
  //   } else {
  //     log(colors.error("This directory is not a git repository"));
  //   }
  // } else {
  // }
};
module.exports = action;

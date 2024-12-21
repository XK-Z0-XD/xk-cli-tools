#!/usr/bin/env node

import { color, colors, exec, fs, getName, log } from "../../utils";
const name = getName(__filename);

const git_cmds = [`git status`, "git config"];
const action = (options?: { status?: any; info?: any }) => {
  const out = (err?: any, stdout?: string, stderr?: string) => {
    if (err) {
      log(color.error(err.stdout));
    }
    log(stdout);
    log(color.error(stderr));
  };

  if (fs.readFileSync(process.cwd()).includes(".git")) {
    if (options) {
      log(options);
      if (options.status) {
        exec("git status", out);
      } else if (options.info) {
      }
    } else {
    }
  }else {
    log(colors.error("This directory is not a git repository"))
  }
};
module.exports = action;

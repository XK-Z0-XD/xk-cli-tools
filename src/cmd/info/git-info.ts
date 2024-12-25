#!/usr/bin/env node
import { spawnSync } from "child_process";
import { readdirSync } from "fs";
import { colors, log, path } from "../../utils";
import Repository from "../cls/Repository";
const os = require("os");
const { Select } = require("enquirer");
type infoAction =
  | "status"
  | "branch"
  | "config"
  | "remote"
  | "objects"
  | "all"
  | "log"
  | "quit";
const getInfo = (dir: string) => {
  let x = dir.substring(dir.lastIndexOf(path.sep) + 1, dir.length - 1);
  const cmds = ["git status", "git ", "git status"];
  let repo = {};

  return repo;
};
const printInfo = (cmdStr: string) => {
  let res = spawnSync(cmdStr);
  log(res);
};
const action = () => {
  const dir = process.cwd();
  const files = readdirSync(dir);
  const repo = new Repository(dir);
  if (files.includes(".git")) {
    // let result = getInfo(dir);
    log(colors.info("Retrieving Git Information..."));
    log(colors.info("Git Repository Info Hub: "));
    let exit = false;
    const selectInfo = new Select({
      name: "info",
      message: "what Info would you like to view",
      choices: ["status", "log", "branch", "remote", "all", "quit"],
      // choices: [
      //   { name: "status", value: "git status" },
      //   { name: "branch", value: "git status" },
      // ],
    });
    while (exit == false) {
      selectInfo.run().then((choice: infoAction) => {
        //  log(colors.info("Answer: "), choice);
        if (choice == "quit") {
          exit = true;
        } else if (choice == "all") {
        } else {
          const cmd = `git ${choice}`;
          printInfo(cmd);
        }
      });
    }
  } else log(colors.error("This directory is not a git repository"));
};
module.exports = action;

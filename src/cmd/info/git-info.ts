#!/usr/bin/env node
import { spawnSync } from "child_process";
import { readdirSync } from "fs";
import { colors, log, path } from "../../utils";

const os = require("os");
const { Select } = require("enquirer");
const getInfo = (dir: string) => {
  let x = dir.substring(dir.lastIndexOf(path.sep) + 1, dir.length - 1);
  const cmds = ["git status", "git ", "git status"];
  let repo = {};
  let res = spawnSync("git branch");
  return repo;
};
const action = () => {
  const dir = process.cwd();
  const files = readdirSync(dir);
  if (files.includes(".git")) {
    let result = getInfo(dir);
    log(colors.info("Retrieving Git Information..."));
    log(colors.info("Git Repository: "));
    // const selectInfo = new Select({
    // 	name: "info",
    // 	message: "View:",
    // 	choices: ["status", "log", "branch", "remote"],
    // });
  } else log(colors.error("This directory is not a git repository"));
};
module.exports = action;

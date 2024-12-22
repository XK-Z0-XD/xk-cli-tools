#!/usr/bin/env node
import { prompt } from "enquirer";
import { colors, getName, log } from "../../../utils";
const name = getName(__filename);
const action = () => {
  log(colors.info.bold("initiating commit..."));
  log(colors.info("Press Ctrl+C to cancel anytime"));
  prompt([
    { type: "input", name: "items", message: "list all files to add: " },
    { type: "input", name: "msg", message: "commit message: " }
  ]).then(({ items, msg }: any) => {
    log(colors.info(`adding ${items}...`));
    log(colors.info(`commiting with message:${msg}...`));
  });
};
module.exports = action;

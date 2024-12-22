#!/usr/bin/env node
//@ts-nocheck
const { Select } = require("enquirer");
import { Command, Option } from "commander";
import { log } from "../../../utils";
const view = require("./view-info");
const save = require("./save");
let opt: Option = null;
const action = (options, program: Command) => {
  if (options) {
    log(options);
    if (options.info){
      view();
    }else if (options.save){

    }
  } else program.help();
};
module.exports = action;

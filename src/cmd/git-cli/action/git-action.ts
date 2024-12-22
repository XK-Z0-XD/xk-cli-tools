#!/usr/bin/env node
//@ts-nocheck
const { Select } = require("enquirer");
import { Option } from "commander";
import { log } from "../../../utils";
let opt:Option = null;
const view = ["view log", "view status", "view config"];
const action = (options) => {
  if (options) log(options);
};
// function processAction()
module.exports = action;

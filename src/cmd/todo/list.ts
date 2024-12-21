#!/usr/bin/env node
import { colors, getName, log } from "../../utils";
const conf = require("conf")
const name = getName(__filename);
const action = (name?: string, options?: any) => {
    log(colors.success("success.\n"),name,'\nopts:',options);
};
module.exports = action;

#!/usr/bin/env node
import { chalk, print } from "../../utils";

const action = (...args:any[]) =>{
    print({color: chalk.cyan},"")
}
module.exports = action;

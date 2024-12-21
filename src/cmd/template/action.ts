#!/usr/bin/env node
import { getName, log } from "../../utils";
const name = getName(__filename);
const action = () =>{
    log ("Template Command Action Executed.")
    log()
}
module.exports = action;

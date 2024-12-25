#!/usr/bin/env node
import Conf from "conf";
import { log } from "../../utils";
const config = new Conf();
const action = () =>{
    log ("Template Command Action Executed.")
}
module.exports = action;

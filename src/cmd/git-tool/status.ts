#!/usr/bin/env node
import { execSync, getName } from "../../utils";
const name = getName(__filename);
const action = (...args:any[]) =>{
    execSync(`git status`);
}
module.exports = action;

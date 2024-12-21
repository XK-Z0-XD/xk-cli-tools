#!/usr/bin/env node
import { errorColor, exec, execSync, getName, log } from "../../utils";
const name = getName(__filename);

const action = (...args:any[]) =>{
     let result = execSync(`git status`);
     new TextDecoder().decode(result.buffer);
    exec("git status", (err,stdout,stderr)=>{
        if (err){
            log(errorColor(err.stdout))
        }
        log(stdout);
        log(stderr);
    })
}
module.exports = action;

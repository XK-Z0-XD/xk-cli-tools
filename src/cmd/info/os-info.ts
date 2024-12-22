#!/usr/bin/env node
import { chalk, log } from "../../utils";
 const os = require("os");
const action = () =>{
     const osInfo = {
      Machine: os.machine(),
      Platform: os.platform(),
      Home: os.homedir(),
      Arch: os.arch(),
      "OS Type": os.type(),
      "OS Version": os.version(),
    };
    let keys = Object.keys(osInfo);
    keys.forEach((o: string) => {
      //@ts-ignore
      let value = osInfo[o];
      log(chalk.yellow(`${o}:\t`), chalk.bgCyan(value));
    });
}
module.exports = action;

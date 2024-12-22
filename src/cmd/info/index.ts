#!/usr/bin/env node

import { readdirSync } from "fs";
import { chalk, colors, Command, getName, log } from "../../utils";
import { helpConfig, outputConfig } from "../config";
const name = getName(__dirname);
const git_info = require("./git-info");
const program = new Command(name);
const desc = "info command";
const infoFrom = {
  os: () => {
    const os = require("os");
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
  },
  process: () => {},
  general: () => {},
  project: () => {},
  git: () => {
   
  },
  file: (name: string) => {},
};
program
  .description(desc)
  .argument(
    "[name]",
    "name of file to examine to examine".concat(
      colors.warning(
        "if [name] isn't specified, current working directory will be used"
      )
    )
  )
  .option("--os", "Print Operating System info")
  .option("--env", "Print Environment Variables")
  .option("--git", "Repository info ".concat())
  .option(
    "--file",
    `file info`.concat(colors.warning("(does not include content)"))
  )
  .action((name, options) => {
    if (options) {
      if (options.os) infoFrom.os();
      else if (options.git) git_info();
      else if (options.file) {
      }
    }
  })
  .configureHelp(helpConfig)
  .configureOutput(outputConfig);

module.exports = program;

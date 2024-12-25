#!/usr/bin/env node

import { colors, Command, getName, log } from "../../utils";
import { helpConfig, outputConfig } from "../config";
const name = getName(__dirname);
const git_info = require("./git-info");
const os_info = require("./os-info");
const file_info = require("./file-info");
const program = new Command(name);
const desc = "info command";
program
  .description(desc)
  .argument(
    "[name]",
    "name of file to examine".concat(
      colors.warning(
        "if [name] isn't specified, current working directory will be used"
      )
    )
  )
  .option("--os", "Print Operating System info")
  .option("--env", "Print Environment Variables")
  .option("--git", "Repository info ")
  .option(
    "--file",
    `file info`.concat(colors.warning("(does not include content)"))
  )
  .action((name?, options?) => {
    log(colors.info("name: "), name,colors.info("\noptions: "), options);
    if (options) {
      if (options.os) os_info();
      else if (options.git) git_info();
      else if (options.file) file_info();
    }else{
      program.help();
    }
  })
  .configureHelp(helpConfig)
  .configureOutput(outputConfig);

module.exports = program;

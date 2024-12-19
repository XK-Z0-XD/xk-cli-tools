#!/usr/bin/env node
/**
 * Command Name
 */
"use strict";
const { chalk, logger, conf, getName } = require("../../util");
const config = new conf();
const name = getName(__filename);
const format = (name)
function funct(name,options) {
  logger({ color: chalk.greenBright }, `${name} executed`);
}
module.exports = funct;

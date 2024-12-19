#!/usr/bin/env node
/**
 * Command Name
 */
"use strict";
const { chalk, logger,  getName } = require("../../util");
const conf = require("conf");
const config = new conf();
const name = getName(__filename);
function funct(list) {
  logger({ color: chalk.greenBright }, `${name} executed`);
}
module.exports = funct;

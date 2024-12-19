#!/usr/bin/env node
/**
 * Command Name
 */
"use strict";
const { chalk,print, conf, getName, } = require("../util");
const config = new conf();
const chalk = require('chalk');
const name = getName(__filename);
function func(){
    print(chalk.greenBright,`${name} executed`);
}
module.exports = func;
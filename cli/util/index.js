#!/usr/bin/env node
const consoleUtils = require("./consoleUtil");
const cmd_util= require("./cmdUtil");
module.id = "util";
module.exports = {...consoleUtils, ...cmd_util};

#!/usr/bin/env node
const { prompt } = require("enquirer");
const configUtil = require("./configUtil");
const consoleUtils = require("./consoleUtil");
const cmd_util = require("./cmdUtil");
module.id = "util";
module.exports = { ...consoleUtils, ...configUtil, ...cmd_util, prompt };

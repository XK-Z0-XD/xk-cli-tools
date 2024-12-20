#!/usr/bin/env node

import { Command } from "commander";

const command:Command = require("./cmd");
// console.log("xk-tools", " ",process.argv);
command.parse(process.argv);
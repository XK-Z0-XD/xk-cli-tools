#!/usr/bin/env node
//@ts-ignore
"use strict";
const command = require("../lib/cmd/git-cli");
// const program = require("../lib/cmd/git-tool");
command.parse(process.argv);


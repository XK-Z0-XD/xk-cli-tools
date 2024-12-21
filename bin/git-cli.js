#!/usr/bin/env node
//@ts-ignore
"use strict";
const command = require("../lib/cmd/git-tool");
// const program = require("../lib/cmd/git-tool");
command.parse(process.argv);


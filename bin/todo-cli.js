#!/usr/bin/env node
//@ts-ignore
"use strict";
const command = require("../lib/cmd/todo");
command.parse(process.argv);


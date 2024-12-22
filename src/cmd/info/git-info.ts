#!/usr/bin/env node
import { log } from "../../utils";

import {spawnSync} from "child_process";
const os = require("os");
const { Select } = require("enquirer");
const action = () =>{
    const cmds = ['git status']
    const dir = process.cwd();
    const files = readdirSync(dir);
    if (files.includes(".git")) {
        log(colors.info("Git Repository: "));
		const selectInfo = new Select({
			name: "info",
			message: "View:",
			choices: ["status", "log", "branch", "remote"],
		});
    } else log(colors.error("This directory is not a git repository"));
}
module.exports = action;

#!/usr/bin/env node
import { exec, execSync } from "child_process";
import { Command } from "commander";
import * as enquirer from "enquirer";
import * as fs from "fs";
import * as path from "path";
import chalk = require("chalk");
// const templates = path.resolve(__dirname, "..", "..", "templates");
export { chalk, Command, enquirer, exec, execSync, fs, path };


#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const pkg = require("../package.json");
/**
 * gets command name from file/dir
 * @param {string} fp
 * @returns {string}
 */
const getName = (fp) => {
  if (fs.statSync(fp).isDirectory()) {
    return fp.substring(fp.lastIndexOf(path.sep) + 1, fp.length);
  } else return fp.substring(fp.lastIndexOf(path.sep) + 1, fp.indexOf(".js"));
};

module.exports = {
    fs,path,pkg,getName
}
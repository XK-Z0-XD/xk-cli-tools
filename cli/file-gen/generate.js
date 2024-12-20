#!/usr/bin/env node
/**
 * Command Name
 */
"use strict";
const { chalk, logger, conf, getName } = require("../util");
const config = new conf();
const name = getName(__filename);
function funct(dir,ext,options) {
  logger({},dir,ext);
  logger({},options);
  if (options){
    
  }
}
module.exports = funct;

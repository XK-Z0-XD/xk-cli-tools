const chalk = require("chalk");
const log = console.log;
const error = console.error;
const logType = {
  ERROR: "",
};
const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",
  FgGray: "\x1b[90m",
  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m",
  BgGray: "\x1b[100m",
};
/**
 * prints to console
 * @param {chalk.Chalk?} color 
 * @param  {...any[]} msg 
 @type {void}
 */
const print = (color, ...msg) => {
  console.log(color(...msg));
};

/** 
@typedef {object} LogOptions
@property {chalk.Chalk|string|undefined} color
 */

/**
 * custom logger
 * @param {object} options
 @param {(chalk.Chalk|string)?} options.color
 */
const logger = ({ color } = options, ...msg) => {
  if (color) {
    if (typeof color == "string") log(color, ...msg, "\x1b[0m");
    // else if (typeof color == "object") 
    log(color(...msg));
    // else console.log(...msg);
  } else console.log(...msg);
};

module.exports = { chalk, log, print, logger, error };

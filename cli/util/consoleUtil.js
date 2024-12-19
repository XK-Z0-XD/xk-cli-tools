const chalk = require("chalk");
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
const log = ({ color } = options, ...msg) => {
  if (color) {
    if (typeof color == "string") console.log(color, ...msg, "\x1b[0m");
    else if (typeof color == "object") console.log(color(...msg));
    else console.log(...msg);
  } else console.log(...msg);
};
const logger = ({ color } = options, ...msg) => {
  if (color) {
    if (typeof color == "string") console.log(color, ...msg, "\x1b[0m");
    else if (typeof color == "object") console.log(color(...msg));
    else console.log(...msg);
  } else console.log(...msg);
};
const error = console.error;
module.exports = { chalk, log, print, logger, error };

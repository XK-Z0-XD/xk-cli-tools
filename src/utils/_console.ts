// import chalk from "chalk";

import { chalk } from "./_extra";

const log = console.log;
const error = console.error;
const color = {
  error: (str: any) => {
    return `\x1b[38;5;9m${str}\x1b[0m`;
  },
   info:(str: any) => {
    return `\x1B[38;5;14m${str}\x1b[0m`;
  },
  success:(str:any)=>{
    return `\x1b[38;5;10m${str}\x1b[0m`;
  }
};
const colors = {
  warning: chalk.bgYellow,
  argDesc: chalk.magenta,
  error: chalk.red,
  info: chalk.cyan,
  success: chalk.green

}
type loggerOptions = { color: chalk.Chalk | string | undefined };
const print = ({ color }: loggerOptions, ...msg: any[]) => {
  if (color) {
    if (typeof color == "string") log(color, ...msg, "\x1b[0m");
    // else if (typeof color == "object")
    else if (typeof color == "function") log(color(...msg));
    // else console.log(...msg);
  } else console.log(...msg);
};
function errorColor(str: any) {
  return `\x1b[38;5;9m${str}\x1b[0m`;
}
export { color, colors, error, errorColor, log, print };


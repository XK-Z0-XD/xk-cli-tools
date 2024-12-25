import { log } from "console";
import { chalk } from "./_extra";
const consoleOut = {
  format: ({}) => {},
};

const formatMsg = (color: chalk.Chalk | string | undefined, ...data: any[]) => {
  if (typeof color == "function") log(color(...data));
  else if (typeof color == "string") log(color, ...data, "\x1b[0m");
  else log(...data);
};
const _format = {
  RESET: "\x1B[0m",
};
const char = ``;

const formats = {
  PURPLE: "\x1B[38;5;5m",
  ERROR_TITLE: "\x1B[48;5;9m",
  ERROR_BODY: "\x1B[38;5;9m",
  RESET: "\x1B[0m",
};
const formated = {
  error: (...msg: any[]) => {
    
  },
};
const output = {
  error: (...data: any[]) => {
    log(
      `${formats.ERROR_TITLE}   ERROR   ${formats.RESET}\n`,
      formats.ERROR_BODY,
      ...data,
      formats.RESET
    );
  },
  info: (...data: any[]) => {
    log(
      `${formats.ERROR_TITLE}   INFO   ${formats.RESET}\n`,
      "\x1B[38;5;34m",
      ...data,
      formats.RESET
    );
  },
  success: (...data: any[]) => {
    log(
      `${"\x1B[48;5;34m"}   ERROR   ${formats.RESET}\n`,
      formats.ERROR_BODY,
      ...data,
      formats.RESET
    );
  },
};
export { formatMsg, output };


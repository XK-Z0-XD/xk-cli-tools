import * as cmdr from "commander";
import { chalk } from "../utils";
const helpConfig: cmdr.HelpConfiguration = {
  commandDescription: (cmd: cmdr.Command) => {
    return chalk.cyanBright.bold(cmd.description());
  },
  commandUsage: (cmd: cmdr.Command) => {
    return chalk.magenta(cmd.usage());
  },
  argumentTerm: (arg: cmdr.Argument) => {
    return chalk.green(arg.name());
  },
  argumentDescription: (arg: cmdr.Argument) => {
    return chalk.cyan(arg.description);
  },
  optionTerm: (opt: cmdr.Option) => {
    return chalk.cyanBright(opt.flags);
  },
  optionDescription: (opt: cmdr.Option) => {
    return chalk.cyanBright(opt.description);
  },

  //   visibleGlobalOptions: (cmd:cmdr.Command)=>{
  //   }
};
const helpCmdConfig: cmdr.HelpConfiguration = {
  ...helpConfig,
};
const outputConfig: cmdr.OutputConfiguration = {
  outputError(str, write) {
    write(chalk.red.bold(str));
  },
};
export { helpConfig, outputConfig };


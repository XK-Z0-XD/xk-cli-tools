import * as cmdr from "commander";
import { chalk, Command, log } from "../utils";
const purple = chalk.hex("#800080"),
  pink = chalk.hex("#FFX0CB");
const helpConfig: cmdr.HelpConfiguration = {
  commandDescription: (cmd: cmdr.Command) => {
    return chalk.cyanBright.bold(cmd.description());
  },
  commandUsage: (cmd: cmdr.Command) => {
    return chalk.magenta();
  },
  argumentTerm: (arg: cmdr.Argument) => {
    return arg.required == true
      ? pink(arg.name())
      : chalk.blueBright(arg.name());
  },
  argumentDescription: (arg: cmdr.Argument) => {
    return chalk.cyan(arg.description);
  },
  optionTerm: (opt: cmdr.Option) => {
    return chalk.cyanBright(opt.flags);
  },
  optionDescription: (opt: cmdr.Option) => {
    return chalk.yellowBright(opt.description);
  },
};
const outputConfig: cmdr.OutputConfiguration = {
  outputError(str, write) {
    const title = chalk.bgRedBright(chalk.black("\tERROR\t")).concat("\n");
    write(title + chalk.red.bold(str));
  },
  writeOut: (str: string) => {
    log(str);
  },
};
const helpCmdConfig: cmdr.HelpConfiguration = {
  ...helpConfig,
  visibleCommands: (cmd) => {
    let cmds: Command[] = [];
    cmd.commands.forEach((value, index: Number) => {
      let command = value
        .configureHelp(helpConfig)
        .configureOutput(outputConfig);
      cmds.push(command);
    });
    return cmds;
  },
};
export { helpCmdConfig, helpConfig, outputConfig };


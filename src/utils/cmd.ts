import { fs, path } from "./_extra";
const pkg = require("../../package.json");

/**
 * get command name
 * @param fp file path of command (file / directory)
 * @returns {string}
 */
const getName = (fp: string) => {
  if (fs.statSync(fp).isDirectory()) {
    return fp.substring(fp.lastIndexOf(path.sep) + 1, fp.length);
  } else return fp.substring(fp.lastIndexOf(path.sep) + 1, fp.indexOf(".js"));
};
const _version = pkg.version;
const _name = pkg.name;

export { _name, _version, getName };


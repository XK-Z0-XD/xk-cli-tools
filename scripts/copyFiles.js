const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const root = process.cwd();
const templateDir = path.join(root,"src","template")
const ts_templates = {
    "cmd-funct": path.join(templateDir,"action.ts"),
    "cmd": path.join("action.ts")
}

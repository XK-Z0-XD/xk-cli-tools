#!/usr/bin/env node
/** */
const conf = require("conf");
type schema = {

}
const _schema = {
  "todo-list": {
    type: "string",
  },
  task: {
    type: "string",
    default: "name",
  },
};
const task_schema = {};
type done = "[done]"
const symbols = {
  done: "[X]",
};
module.exports = {};

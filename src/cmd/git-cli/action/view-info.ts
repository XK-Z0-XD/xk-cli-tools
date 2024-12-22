#!/usr/bin/env node

import { colors, log } from "../../../utils";

//@ts-nocheck
const { Select } = require("enquirer");
type git_action = "log" | "status" | "branch" | "remote";
const view = {
  status: () => {
    
  },
  log: () => {},
  branch: () => {},
  remote: () => {},
};
const action = () => {
  // const quest:Options = {}
  const selectInfo = new Select({
    name: "info",
    message: "View:",
    choices: ["status", "log", "branch", "remote"],
  });
  selectInfo
    .run()
    .then((answer: git_action) => {
      console.log("Answer:", answer);
      let viewItem = view[answer];
      switch (answer) {
        case "log":
        case "status":
        case "branch":
        case "remote":
          viewItem = view[answer];
          viewItem();
          break;
        default:
          log(colors.error(`unknown param: ${answer}`));
          break;
      }
    })
    .catch(console.error);
};

// function processAction()
module.exports = action;

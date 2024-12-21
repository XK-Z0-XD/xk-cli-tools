#!/usr/bin/env node
//@ts-nocheck
const { Select } = require("enquirer");
type git_action = "log" | "status" | "save" | "push";
const view = ["view log", "view status", "view config"];
const action = (options:{}) => {
  // const quest:Options = {}
  const selectAction = new Select({
    name: "info",
    message: "View:",
    choices: [
      //   ...actions,
      { message: "View", name: "view log", value: "git log" },
      { message: "View Status", name: "view status", value: "git status" },
      { message: "View Info", name: "view info", value: "info" },
      { message: "", name: "view all", value: "view" },
      // { message: "view log",name:"log", value: "git log" },
      // { message: "view status",name:"status", value: "git status" },
      // { message: "save repo",name:"save", value: "status" },
      // { message: "push to remote origin",name:"sync", value: "status" },
    ],
  });
  selectAction
    .run()
    .then((answer: git_action) => {
      console.log("Answer:", answer);
      switch (answer) {
        case "log":
        case "status":
        case "save":
        case "push":
      }
    })
    .catch(console.error);
};
// function processAction()
module.exports = action;

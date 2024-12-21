#!/usr/bin/env node
const { Select } = require("enquirer");
const actions = ["view log","view status", "view config"]
const action = () => {
  const selectAction = new Select({
    name: "info",
    message: "View:",
    choices: [
        ...actions
    //   { message: "view log", value: "log" },
    //   { message: "view status", value: "status" },
    //   { message: "save repo", value: "status" },
    //   { message: "sync", value: "status" },
    ],
  });
  selectAction
    .run()
    .then((answer: any) => {
      console.log("Answer:", answer);
    })
    .catch(console.error);
};
// function processAction()
module.exports = action;

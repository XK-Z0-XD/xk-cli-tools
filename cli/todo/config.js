#!/usr/bin/env node
///<reference types="conf"/>
const Conf = require("conf");
/**@type {import("conf").Schema} */
const schema = {
    'todo-list': {
        type: 'string',

    },
    task: {
        type: 'string',
        default: 'name',
        
    }
}
const task_schema = {

}
const symbols = {
    done: "[X]",

}
module.exports = {schema,symbols}
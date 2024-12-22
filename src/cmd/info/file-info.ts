#!/usr/bin/env node
import { colors, log } from "../../utils";

const action = (fileName:string) =>{
log(colors.info("File: ",fileName))
}
module.exports = action;

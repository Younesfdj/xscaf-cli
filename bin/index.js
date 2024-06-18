#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const index_1 = __importDefault(require("./commands/init/index"));
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .example("xgen init express-app", "Initialize a new xgen project")
    .command("init", "Initialize a new xgen project", {}, function (argv) {
    (0, index_1.default)(argv._);
})
    .demandCommand()
    .help().argv;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_1 = require("../../utils/package");
const chalk_1 = __importDefault(require("chalk"));
const enquirer_1 = require("enquirer");
async function init(args) {
    let projectNameProvided = false;
    let projectName;
    if (args.length > 1) {
        projectNameProvided = true;
        projectName = args.slice(1).join(" ");
    }
    const responses = await (0, enquirer_1.prompt)([
        {
            type: "input",
            name: "projectName",
            message: chalk_1.default.cyan("Project name:"),
            initial: projectNameProvided ? projectName : "xgen-project",
            skip: projectNameProvided,
        },
        {
            type: "input",
            name: "packageName",
            message: chalk_1.default.cyan("Package name:"),
            initial: (answers) => (0, package_1.toValidPackageName)(answers.state.answers.projectName),
            validate: (input) => (0, package_1.isValidPackageName)(input)
                ? true
                : "Invalid package name\n(use a suit of characters, lowercase, and dashes)",
        },
        {
            type: "select",
            name: "variant",
            message: chalk_1.default.cyan("Variant:"),
            choices: [
                { message: chalk_1.default.yellowBright("JavaScript"), name: "js" },
                { message: chalk_1.default.blueBright("TypeScript"), name: "ts" },
            ],
            initial: 0,
        },
        {
            type: "confirm",
            name: "src",
            message: chalk_1.default.cyan("Use /src folder?"),
            initial: true,
        },
    ]);
    console.log(responses);
}
exports.default = init;

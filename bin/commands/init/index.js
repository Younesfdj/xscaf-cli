import { isValidPackageName, toValidPackageName } from "../../utils/package.js";
import chalk from "chalk";
import boxen from "boxen";
import pkg from "enquirer";
const { prompt } = pkg;
import { copy, editFile, __dirname } from "../../utils/files.js";
import path from "path";
export default async function init(args) {
    // Check if the user provided a project name
    let projectNameProvided = false;
    let projectName;
    if (args.length > 1) {
        projectNameProvided = true;
        projectName = args.slice(1).join(" ");
    }
    // Initialize the prompt
    const responses = await prompt([
        {
            type: "input",
            name: "projectName",
            message: chalk.cyan("Project name:"),
            initial: projectNameProvided ? projectName : "xgen-project",
            skip: projectNameProvided,
        },
        {
            type: "input",
            name: "packageName",
            message: chalk.cyan("Package name:"),
            initial: (answers) => toValidPackageName(answers.state.answers.projectName),
            validate: (input) => isValidPackageName(input)
                ? true
                : "Invalid package name\n(use a suit of characters, lowercase, and dashes)",
        },
        {
            type: "select",
            name: "variant",
            message: chalk.cyan("Variant:"),
            choices: [
                { message: chalk.yellowBright("JavaScript"), name: "js" },
                { message: chalk.blueBright("TypeScript"), name: "ts" },
            ],
            initial: 0,
        },
        {
            type: "confirm",
            name: "src",
            message: chalk.cyan("Use /src folder?"),
            initial: true,
        },
    ]);
    console.log(chalk.blue("\nScaffolding project for you..."));
    console.time(chalk.blue("Done in"));
    // Copy the template to the new project
    const templatePath = path.join(__dirname, "..", "..", "templates", `express-${responses.variant}`);
    const destPath = path.join(process.cwd(), responses.projectName);
    if (responses.src) {
        copy(templatePath, destPath);
    }
    else {
        copy(templatePath, destPath, [path.join(templatePath, "src")]);
        copy(path.join(templatePath, "src"), destPath);
    }
    // Update package.json with the new package name
    editFile(path.join(destPath, "package.json"), (content) => {
        const newPackageJson = JSON.parse(content);
        newPackageJson.name = responses.packageName;
        return JSON.stringify(newPackageJson);
    });
    console.timeEnd(chalk.blue("Done in"));
    console.log("\n" +
        boxen(`cd ${responses.projectName}\nnpm install\nnpm run serve\n`, {
            padding: 0.5,
            borderColor: "redBright",
            borderStyle: "classic",
            title: "Now run:",
        }));
}

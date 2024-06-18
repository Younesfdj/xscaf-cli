import { isValidPackageName, toValidPackageName } from "../../utils/package";
import chalk from "chalk";
import { prompt } from "enquirer";

export default async function init(args: (string | number)[]) {
  let projectNameProvided = false;
  let projectName;
  if (args.length > 1) {
    projectNameProvided = true;
    projectName = args.slice(1).join(" ");
  }
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
      initial: (answers: any) =>
        toValidPackageName(answers.state.answers.projectName),
      validate: (input: string) =>
        isValidPackageName(input)
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
  console.log(responses);
}

import chalk from "chalk";
import pkg from "enquirer";
const { prompt } = pkg;
import { copyDir, __dirname, dirExists } from "../../utils/files.js";
import path from "path";
import { IResponse } from "./types/Respone.js";

export default async function add(arg: string) {
  // Check if the user has provided a valid template path
  const srcPath = path.join(process.cwd(), arg);
  if (!dirExists(srcPath)) {
    console.log(chalk.red(`${srcPath} not found`));
    process.exit(1);
  }

  const response: IResponse = await prompt([
    {
      type: "input",
      name: "templateName",
      message: chalk.cyan("Template name:"),
      initial: "custom-template",
      validate: (input: string) =>
        dirExists(path.join(__dirname, "../../templates/custom", input))
          ? "Template already exists"
          : true,
    },
  ]);

  // Copy the template to the custom templates directory
  const destPath = path.join(
    __dirname,
    "../../templates/custom",
    response.templateName
  );
  copyDir(srcPath, destPath);
}

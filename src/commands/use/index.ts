import chalk from "chalk";
import pkg from "enquirer";
const { prompt } = pkg;
import { getAllDirs, __dirname, copy } from "../../utils/files.js";
import path from "path";
import { IResponse } from "./types/Response.js";

export default async function use() {
  const templates = getAllDirs(
    path.join(__dirname, "..", "..", "templates", "custom")
  );
  if (templates.length === 0) {
    console.log(chalk.red("No custom templates found"));
    process.exit(1);
  }
  const response: IResponse = await prompt([
    {
      type: "autocomplete",
      name: "template",
      message: chalk.blue("Pick your template"),
      initial: 0,
      choices: templates,
    },
    {
      type: "input",
      name: "projectName",
      message: chalk.blue("Project name:"),
      initial: "xscaf-project",
    },
  ]);
  console.time(chalk.blue("Done in"));

  const templatePath = path.join(
    __dirname,
    "..",
    "..",
    "templates",
    "custom",
    response.template
  );
  const destPath = path.join(process.cwd(), response.projectName);
  copy(templatePath, destPath);

  console.timeEnd(chalk.blue("Done in"));
}

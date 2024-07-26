import chalk from "chalk";

import pkg from "enquirer";
const { prompt } = pkg;
import path from "path";
import { IResponse } from "./types/Response.js";
import { getAllDirs, removeDir, __dirname } from "../../../utils/files.js";
export default async function rm() {
  const templatesPath = path.join(__dirname, "..", "..", "templates", "custom");
  const templates = getAllDirs(templatesPath);
  if (templates.length === 0) {
    console.log(chalk.red("No custom templates found"));
    return;
  }
  const responses: IResponse = await prompt([
    {
      type: "select",
      name: "template",
      message: chalk.cyan("Select the template you want to remove:"),
      choices: templates.map((t) => ({ message: t, name: t })),
    },
  ]);
  console.log(chalk.blue("\nRemoving template..."));
  console.time(chalk.blue("Done in"));
  const templatePath = path.join(templatesPath, responses.template);
  removeDir(templatePath);
  console.timeEnd(chalk.blue("Done in"));
  // add the done emoji to the text
  console.log(chalk.green("✔Template removed successfully"));
}

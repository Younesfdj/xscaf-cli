import chalk from "chalk";
import pkg from "enquirer";
const { prompt } = pkg;
import { getAllDirs, __dirname } from "../../utils/files.js";
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
  ]);
  console.log(`Using ${response.template}`);
}

import { getAllDirs, __dirname } from "../../../utils/files.js";
import path from "path";
import chalk from "chalk";

export default async function ls() {
  const templatesPath = path.join(__dirname, "..", "..", "templates", "custom");
  const templates = getAllDirs(templatesPath);
  templates.map((t) => {
    console.log(`\t- ${chalk.blue(t)} in ${path.join(templatesPath, t)}`);
  });
}

import chalk from "chalk";
import pkg from "enquirer";
const { prompt } = pkg;
import { copy, editFile, __dirname } from "../../utils/files.js";
import path from "path";

export default function use() {
  console.log("hey use has been executed");
}

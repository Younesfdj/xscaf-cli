#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import init from "./commands/init/index.js";

const run = () =>
  yargs(hideBin(process.argv))
    .example("xscaf init express-app", "Initialize a new xscaf project")
    .command("init", "Initialize a new xscaf project", {}, function (argv) {
      init(argv._);
    })
    .demandCommand()
    .strict()
    .alias("v", "version")
    .alias("h", "help")
    .help("help").argv;

export default run;

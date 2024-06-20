#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import init from "./commands/init/index.js";

const run = () =>
  yargs(hideBin(process.argv))
    .example("xgen init express-app", "Initialize a new xgen project")
    .command("init", "Initialize a new xgen project", {}, function (argv) {
      init(argv._);
    })
    .demandCommand()
    .strict()
    .alias("v", "version")
    .alias("h", "help")
    .help("help").argv;

export default run;

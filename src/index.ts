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
    .command("$0", "", {}, function (argv) {
      console.log(
        `Unrecognized command '${argv._.join(
          " "
        )}'\nRun 'xscaf --help' for usage.`
      );
    })
    .demandCommand()
    .alias("v", "version")
    .alias("h", "help")
    .help("help").argv;

export default run;

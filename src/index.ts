#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import init from "./commands/init/index.js";
import add from "./commands/add/index.js";
import use from "./commands/use/index.js";
import cmdWrapper from "./utils/errors.js";

const run = () =>
  yargs(hideBin(process.argv))
    .example("xscaf init express-app", "Initialize a new xscaf project")
    .example("xscaf add custom-template", "Add a custom scaffolding template")
    .example("xscaf use custom-template", "Use a custom scaffolding template")
    .command("init", "Initialize a new xscaf project", {}, function (argv) {
      cmdWrapper(init(argv._));
    })
    .command(
      "add PATH",
      "Add a custom template",
      (yargs) => {
        yargs.positional("PATH", {
          describe: "The path to the custom template",
          type: "string",
        });
      },
      function (argv) {
        cmdWrapper(add(argv.PATH as string));
      }
    )
    .command("use", "Use a custom template", {}, function (argv) {
      cmdWrapper(use());
    })
    .command("$0", false, {}, function (argv) {
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

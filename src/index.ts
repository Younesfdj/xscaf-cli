#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import init from "./commands/init/index.js";
import tmplAdd from "./commands/tmpl/add/index.js";
import cmdWrapper from "./utils/errors.js";
import tmplUse from "./commands/tmpl/use/index.js";
import tmplLs from "./commands/tmpl/ls/index.js";
import tmplRm from "./commands/tmpl/rm/index.js";

const run = () =>
  yargs(hideBin(process.argv))
    .example("xscaf init express-app", "Initialize a new xscaf project")
    .example("xscaf tmpl ls", "List all custom templates")
    .example(
      "xscaf tmpl use -n custom-template",
      "Use a custom scaffolding template"
    )
    .command("init", "Initialize a new xscaf project", {}, function (argv) {
      cmdWrapper(init(argv._));
    })
    .command(
      "tmpl <CMD>",
      "Manage custom project templates. Use this command to add, use, list, or remove custom templates",
      (yargs) => {
        yargs
          .command(
            "add PATH",
            "Add a custom template",
            (yargs) => {
              yargs.positional("PATH", {
                describe: "The relative path to the custom template",
                type: "string",
              });
            },
            function (argv) {
              cmdWrapper(tmplAdd(argv.PATH as string));
            }
          )
          .command(
            "use",
            "Use a custom template.",
            (yargs) =>
              yargs.option("name", {
                alias: "n",
                describe: "The name of template",
                type: "string",
              }),
            function (argv) {
              cmdWrapper(tmplUse(argv.name as string));
            }
          )
          .command(
            "ls",
            "List all your saved custom templates.",
            {},
            (argv) => {
              cmdWrapper(tmplLs());
            }
          )
          .command(
            "rm",
            "Remove a custom template from your collection.",
            {},
            (argv) => {
              cmdWrapper(tmplRm());
            }
          )
          .command("$0", false, {}, function (argv) {
            console.log(
              `Unrecognized command '${argv._.join(
                " "
              )}'\nRun 'xscaf --help' for usage.`
            );
          });
      }
    )
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

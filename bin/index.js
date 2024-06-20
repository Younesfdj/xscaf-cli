#! /usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import init from "./commands/init/index.js";
yargs(hideBin(process.argv))
    .example("xgen init express-app", "Initialize a new xgen project")
    .command("init", "Initialize a new xgen project", {}, function (argv) {
    init(argv._);
})
    .demandCommand()
    .strict()
    .option("h", { alias: "help" })
    .option("v", { alias: "version" })
    .help("help").argv;

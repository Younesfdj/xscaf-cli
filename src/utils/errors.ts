import chalk from "chalk";

async function commandErrorHandler(cmd: Promise<void>) {
  try {
    await cmd;
  } catch (error) {
    console.log(chalk.red("❌Process stopped\tSomething went wrong"));
  }
}
export default commandErrorHandler;

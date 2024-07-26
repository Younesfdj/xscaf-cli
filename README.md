# xscaf (Express Scaffold)

[![Version](https://img.shields.io/npm/v/xscaf.svg)](https://npmjs.org/package/xscaf)
[![Downloads/week](https://img.shields.io/npm/dw/xscaf.svg)](https://npmjs.org/package/xscaf)

**xscaf** is a powerful CLI tool designed to streamline the process of creating and managing Express.js applications. With **xscaf**, you can scaffold a fully structured backend project in seconds, saving you time and eliminating repetitive coding tasks.

<!-- toc -->

- [Features](#features)
- [Usage](#usage)
- [Commands](#commands)
- [Contribution](#contribution)
- [License](#license)
<!-- tocstop -->

## Features

- ⚡ **Quick Project Initialization**: Generate a new Express.js project with customizable options for JavaScript or TypeScript.
- 🗂️ **Structured Folder Setup**: Create organized folders for routes, controllers, and services.
- 🏗️ **Microservices Architecture**: Best practices for scalable microservices.
- 📜 **Swagger Documentation**: Generate Swagger docs for easy API documentation.
- 🔧 **Flexible Configuration**: Support for CommonJS, ESM, npm, pnpm, and yarn.
- 🗄️ **Database and ORM Integration**: Initialize projects with MongoDB, PostgreSQL, Prisma, or Drizzle. (not supported yet)
- 🛠️ **Additional Tools**: Integrated logger library, Docker Compose file, and GitHub Actions workflow.

## Usage

```sh-session
$ npm install -g xscaf
$ xscaf COMMAND
running command...
$ xscaf --version
xscaf/1.0.0 linux-x64 node-v20.13.1
$ xscaf --help
USAGE
  $ xscaf COMMAND
```

## Commands

- [`xscaf init PROJECT_NAME`](#xscaf-init-project_name)
- [`xscaf tmpl <CMD>`](#xscaf-tmpl-cmd)

### `xscaf init PROJECT_NAME`

Scaffold a new Express.js project.

```
USAGE
  $ xscaf init PROJECT_NAME

ARGUMENTS
  PROJECT_NAME  Name of the new project

DESCRIPTION
  Generate a new Express.js project with a structured folder setup, optional TypeScript support, and Swagger documentation.

EXAMPLES
  $ xscaf init my-app
```

### `xscaf tmpl <CMD>`

Manage custom templates for your projects.

```
USAGE
  $ xscaf tmpl <CMD>

COMMANDS
  xscaf tmpl add PATH  Add a custom template
  xscaf tmpl use       Use a custom template.
  xscaf tmpl ls        List all your saved custom templates.
  xscaf tmpl rm        Remove a custom template from your collection.

EXAMPLES
  $ xscaf tmpl add express-starter
  $ xscaf tmpl use
  $ xscaf tmpl ls
  $ xscaf tmpl rm
```

For more documentation about the commands, run :
```
$ xscaf <cmd> help
```
## Contribution

We welcome contributions to xscaf! For guidelines on how to contribute, please see our [CONTRIBUTING.md](https://github.com/Younesfdj/xscaf-cli/blob/main/CONTRIBUTING.md)

## License

This project is licensed under the terms of the MIT License. See the [LICENSE](https://github.com/Younesfdj/xscaf-cli/blob/main/LICENSE) file for details.

---

With **xscaf**, your Express.js project setup is just a command away! 🚀

For more details, visit our [GitHub repository](https://github.com/Younesfdj/xscaf-cli). Happy coding! 😊

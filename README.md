# xscaf (Express Scaffold)

[![Version](https://img.shields.io/npm/v/xscaf.svg)](https://npmjs.org/package/xscaf)
[![Downloads/week](https://img.shields.io/npm/dw/xscaf.svg)](https://npmjs.org/package/xscaf)

xscaf is a powerful CLI tool designed to streamline the process of creating and managing Express.js applications. With xscaf, you can scaffold a fully structured backend project in seconds, saving you time and eliminating repetitive coding tasks.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

## Features

- **Quick Project Initialization**: Generate a new Express.js project with customizable options for JavaScript or TypeScript.
- **Structured Folder Setup**: Automatically create a well-organized folder structure with routes, controllers, and services.
- **Microservices Architecture**: Set up a backend following best practices for scalable microservices.
- **Swagger Documentation**: Generate Swagger docs out of the box for easy API documentation.
- **Flexible Configuration**: Support for CommonJS, ESM, and various package managers (npm, pnpm, yarn).
- **Database and ORM Integration**: Initialize projects with MongoDB, PostgreSQL, Prisma, or Drizzle support.

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
...
```

## Commands

* [`xscaf init PROJECT_NAME`](#xscaf-init-project_name)

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

_See code: [src/commands/init.ts](https://github.com/Younesfdj/xscaf-cli/blob/main/src/commands/init/index.ts)_

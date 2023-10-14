# tRPC - Todo app

A Todo App to play around with tRPC.

## Table of Contents

- [How to use](#how-to-use)
  - [Installation](#installation)
  - [Run the project](#run-the-project)
  - [Adding a new dependency](#adding-a-new-dependency)
- [Gotchas](#gotchas)


## How to use

### Installation

1. Get this repository's content by [direct download](https://github.com/leoncik/tRPC-Todo_App/archive/refs/heads/master.zip) or by cloning It:

```sh
git clone https://github.com/leoncik/tRPC-Todo_App.git
```

2. Make sure that [Node.js](https://nodejs.org/en/) is installed on your machine.

3. Install the project's dependencies:

```sh
npm i --workspaces
```

### Run the project

Once you have completed the installation steps, you can run the project with:

```sh
npm run dev
```

### Adding a new dependency

Use this command to add a new dependency to the mono-repo (in this example, It will add "@trpc/server" to the "server" workspace).

```sh
npm i @trpc/server --workspace=server
```

## Gotchas

-   When working with _npm workspaces_, make sure that the **name** key of your package.json in the child folders of the _packages_ directory matches the name provided in the package.json at the root level. I first named my client with a different name than client.

- When installing dependencies I had an error with Husky (command not found). To fix this error I had to edit the "prepare" script on my root package.json:

```json
"prepare": "node -e \"if (process.env.NODE_ENV !== 'production'){process.exit(1)} \" || husky install",
```

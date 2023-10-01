# tRPC - Todo app

A Todo App to play around with tRPC.

## How to use

```sh
npm i --workspaces
```

```sh
npm run dev
```

## Gotchas

- When working with workspaces, make sure that the **name** key of your package.json in the child folders of the *packages* directory matches the name provided in the package.json at the root level. I first named my client with a different name than client.
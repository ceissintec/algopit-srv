# Algopit API

Made with Apollo Server, Express and Typescript.

## How to run

For now, the API only works in local environments; a multi stage environment must be setup. To run, first install `npx`
and then run these two commands (only once)

- `npx prisma deploy`
- `npx prisma generate`

(Please refer to the prisma documentation for more info about these commands)
After this, to execute the API and watch for changes in local dev, you only need to run

- `yarn dev`

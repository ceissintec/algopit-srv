# run.sh
#!/bin/sh

prisma deploy --force;
yarn copy-to-dist
node ../dist/src/server.js;
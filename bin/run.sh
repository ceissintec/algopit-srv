# run.sh
#!/bin/sh

prisma deploy --force;
node ./dist/src/server.js;